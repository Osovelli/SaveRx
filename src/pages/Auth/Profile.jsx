import { useState, useRef } from "react"
import { Link } from "react-router-dom"
import { Camera, Edit3, Save, X, LogOut, Shield, Pill, Trash2, Plus, Eye } from "lucide-react"
import { CustomInput } from "../../components/CustomInput"
import { CustomButton } from "../../components/CustomButton"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../../components/ui/tabs"
import { Avatar, AvatarImage, AvatarFallback } from "../../components/ui/avatar"
import { PasswordStrength } from "../../components/PasswordStrength"

export default function ProfilePage() {
  const fileInputRef = useRef(null)

  // User data state
  const [userInfo, setUserInfo] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    dateOfBirth: "1990-05-15",
    gender: "male",
    address: "123 Main St, Anytown, ST 12345",
    profileImage: null,
  })

  // Edit states
  const [isEditingProfile, setIsEditingProfile] = useState(false)
  const [editedInfo, setEditedInfo] = useState({ ...userInfo })

  // Password change state
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  })

  // Prescriptions data
  const [prescriptions, setPrescriptions] = useState([
    {
      id: 1,
      name: "Lisinopril 10mg",
      dosage: "10mg once daily",
      prescribedBy: "Dr. Smith",
      dateAdded: "2024-01-15",
      refillsLeft: 3,
      nextRefill: "2024-02-15",
    },
    {
      id: 2,
      name: "Metformin 500mg",
      dosage: "500mg twice daily",
      prescribedBy: "Dr. Johnson",
      dateAdded: "2024-01-10",
      refillsLeft: 2,
      nextRefill: "2024-02-10",
    },
  ])

  // Status states
  const [status, setStatus] = useState("idle")
  const [message, setMessage] = useState("")

  const handleProfileImageUpload = (event) => {
    const file = event.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setEditedInfo({ ...editedInfo, profileImage: e.target.result })
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSaveProfile = async () => {
    setStatus("loading")
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setUserInfo({ ...editedInfo })
      setIsEditingProfile(false)
      setStatus("success")
      setMessage("Profile updated successfully!")
      setTimeout(() => {
        setStatus("idle")
        setMessage("")
      }, 3000)
    } catch (error) {
      setStatus("error")
      setMessage("Failed to update profile. Please try again.")
    }
  }

  const handlePasswordChange = async () => {
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      setStatus("error")
      setMessage("New passwords do not match.")
      return
    }

    setStatus("loading")
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setPasswordData({ currentPassword: "", newPassword: "", confirmPassword: "" })
      setStatus("success")
      setMessage("Password updated successfully!")
      setTimeout(() => {
        setStatus("idle")
        setMessage("")
      }, 3000)
    } catch (error) {
      setStatus("error")
      setMessage("Failed to update password. Please try again.")
    }
  }

  const handleRemovePrescription = (id) => {
    setPrescriptions(prescriptions.filter((p) => p.id !== id))
  }

  const handleLogout = () => {
    // Add logout logic here
    window.location.href = "/sign-in"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-2 rounded-lg">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 7h-3V6a4 4 0 0 0-8 0v1H5a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1zM10 6a2 2 0 0 1 4 0v1h-4V6zm8 13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h2v1a1 1 0 0 0 2 0V9h4v1a1 1 0 0 0 2 0V9h2v10z" />
                  <circle cx="12" cy="15" r="2" />
                </svg>
              </div>
              <span className="text-xl font-bold text-gray-900">SaveRx</span>
            </Link>
            <CustomButton
              onClick={handleLogout}
              variant="outline"
              className="border-red-600 text-red-600 hover:bg-red-50"
              size="sm"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </CustomButton>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Profile Header */}
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-8">
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
              {/* Profile Picture */}
              <div className="relative">
                <Avatar className="w-24 h-24 md:w-32 md:h-32">
                  {editedInfo.profileImage || userInfo.profileImage ? (
                    <AvatarImage src={editedInfo.profileImage || userInfo.profileImage} alt="Profile picture" />
                  ) : (
                    <AvatarFallback className="text-2xl bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-600">
                      {userInfo.firstName[0]}
                      {userInfo.lastName[0]}
                    </AvatarFallback>
                  )}
                </Avatar>
                {isEditingProfile && (
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="absolute -bottom-2 -right-2 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full shadow-lg transition-colors"
                  >
                    <Camera className="w-4 h-4" />
                  </button>
                )}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleProfileImageUpload}
                  className="hidden"
                />
              </div>

              {/* User Info */}
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  {userInfo.firstName} {userInfo.lastName}
                </h1>
                <p className="text-gray-600 mb-4">{userInfo.email}</p>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    Verified Patient
                  </span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    Active Prescriptions: {prescriptions.length}
                  </span>
                </div>
              </div>

              {/* Edit Button */}
              <div className="flex space-x-2">
                {isEditingProfile ? (
                  <>
                    <CustomButton
                      onClick={handleSaveProfile}
                      disabled={status === "loading"}
                      className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
                      size="sm"
                    >
                      <Save className="w-4 h-4 mr-2" />
                      Save
                    </CustomButton>
                    <CustomButton
                      onClick={() => {
                        setIsEditingProfile(false)
                        setEditedInfo({ ...userInfo })
                      }}
                      variant="outline"
                      size="sm"
                    >
                      <X className="w-4 h-4 mr-2" />
                      Cancel
                    </CustomButton>
                  </>
                ) : (
                  <CustomButton
                    onClick={() => setIsEditingProfile(true)}
                    variant="outline"
                    className="border-blue-600 text-blue-600 hover:bg-blue-50"
                    size="sm"
                  >
                    <Edit3 className="w-4 h-4 mr-2" />
                    Edit Profile
                  </CustomButton>
                )}
              </div>
            </div>

            {/* Status Message */}
            {message && (
              <div
                className={`mt-4 p-4 rounded-lg ${
                  status === "success"
                    ? "bg-green-50 text-green-800 border border-green-200"
                    : "bg-red-50 text-red-800 border border-red-200"
                }`}
              >
                {message}
              </div>
            )}
          </div>

          {/* Tabs */}
          <Tabs defaultValue="personal" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="personal">Personal Info</TabsTrigger>
              <TabsTrigger value="prescriptions">Prescriptions</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
            </TabsList>

            {/* Personal Information Tab */}
            <TabsContent value="personal">
              <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Personal Information</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <CustomInput
                    label="First Name"
                    value={isEditingProfile ? editedInfo.firstName : userInfo.firstName}
                    onChange={(e) => setEditedInfo({ ...editedInfo, firstName: e.target.value })}
                    disabled={!isEditingProfile}
                    primaryColor="blue"
                  />
                  <CustomInput
                    label="Last Name"
                    value={isEditingProfile ? editedInfo.lastName : userInfo.lastName}
                    onChange={(e) => setEditedInfo({ ...editedInfo, lastName: e.target.value })}
                    disabled={!isEditingProfile}
                    primaryColor="blue"
                  />
                  <CustomInput
                    label="Email Address"
                    type="email"
                    value={isEditingProfile ? editedInfo.email : userInfo.email}
                    onChange={(e) => setEditedInfo({ ...editedInfo, email: e.target.value })}
                    disabled={!isEditingProfile}
                    primaryColor="blue"
                  />
                  <CustomInput
                    label="Phone Number"
                    value={isEditingProfile ? editedInfo.phone : userInfo.phone}
                    onChange={(e) => setEditedInfo({ ...editedInfo, phone: e.target.value })}
                    disabled={!isEditingProfile}
                    primaryColor="blue"
                  />
                  <CustomInput
                    label="Date of Birth"
                    type="date"
                    value={isEditingProfile ? editedInfo.dateOfBirth : userInfo.dateOfBirth}
                    onChange={(e) => setEditedInfo({ ...editedInfo, dateOfBirth: e.target.value })}
                    disabled={!isEditingProfile}
                    primaryColor="blue"
                  />
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-900">Gender</label>
                    <select
                      value={isEditingProfile ? editedInfo.gender : userInfo.gender}
                      onChange={(e) => setEditedInfo({ ...editedInfo, gender: e.target.value })}
                      disabled={!isEditingProfile}
                      className="w-full h-12 px-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50 disabled:cursor-not-allowed"
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                      <option value="prefer-not-to-say">Prefer not to say</option>
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <CustomInput
                      label="Address"
                      value={isEditingProfile ? editedInfo.address : userInfo.address}
                      onChange={(e) => setEditedInfo({ ...editedInfo, address: e.target.value })}
                      disabled={!isEditingProfile}
                      primaryColor="blue"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Prescriptions Tab */}
            <TabsContent value="prescriptions">
              <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-900">My Prescriptions</h2>
                  <CustomButton
                    className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
                    size="sm"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Add Prescription
                  </CustomButton>
                </div>

                <div className="space-y-4">
                  {prescriptions.map((prescription) => (
                    <div
                      key={prescription.id}
                      className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <Pill className="w-5 h-5 text-blue-600" />
                            <h3 className="font-semibold text-gray-900">{prescription.name}</h3>
                          </div>
                          <p className="text-gray-600 mb-2">{prescription.dosage}</p>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-500">
                            <div>
                              <span className="font-medium">Prescribed by:</span>
                              <br />
                              {prescription.prescribedBy}
                            </div>
                            <div>
                              <span className="font-medium">Date Added:</span>
                              <br />
                              {prescription.dateAdded}
                            </div>
                            <div>
                              <span className="font-medium">Refills Left:</span>
                              <br />
                              {prescription.refillsLeft}
                            </div>
                            <div>
                              <span className="font-medium">Next Refill:</span>
                              <br />
                              {prescription.nextRefill}
                            </div>
                          </div>
                        </div>
                        <div className="flex space-x-2 ml-4">
                          <CustomButton variant="outline" size="sm">
                            <Eye className="w-4 h-4" />
                          </CustomButton>
                          <CustomButton variant="outline" size="sm">
                            <Edit3 className="w-4 h-4" />
                          </CustomButton>
                          <CustomButton
                            variant="outline"
                            size="sm"
                            className="border-red-600 text-red-600 hover:bg-red-50"
                            onClick={() => handleRemovePrescription(prescription.id)}
                          >
                            <Trash2 className="w-4 h-4" />
                          </CustomButton>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Security Tab */}
            <TabsContent value="security">
              <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Security Settings</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Change Password</h3>
                    <div className="space-y-4">
                      <CustomInput
                        label="Current Password"
                        type="password"
                        value={passwordData.currentPassword}
                        onChange={(e) => setPasswordData({ ...passwordData, currentPassword: e.target.value })}
                        primaryColor="blue"
                        showPasswordToggle
                      />
                      <CustomInput
                        label="New Password"
                        type="password"
                        value={passwordData.newPassword}
                        onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })}
                        primaryColor="blue"
                        showPasswordToggle
                      />
                      {passwordData.newPassword && <PasswordStrength password={passwordData.newPassword} />}
                      <CustomInput
                        label="Confirm New Password"
                        type="password"
                        value={passwordData.confirmPassword}
                        onChange={(e) => setPasswordData({ ...passwordData, confirmPassword: e.target.value })}
                        primaryColor="blue"
                        showPasswordToggle
                      />
                      <CustomButton
                        onClick={handlePasswordChange}
                        disabled={
                          !passwordData.currentPassword ||
                          !passwordData.newPassword ||
                          !passwordData.confirmPassword ||
                          status === "loading"
                        }
                        className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
                      >
                        <Shield className="w-4 h-4 mr-2" />
                        Update Password
                      </CustomButton>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
