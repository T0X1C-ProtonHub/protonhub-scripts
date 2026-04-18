local function printingAction()
	local shittyPlay = print
	shittyPlay("hi")
	shittyPlay("This isn't cookie grabber. it def not lol")
end

local function createGui()
	local player = game.Players.LocalPlayer
	local GUI = Instance.new("ScreenGui")
	GUI.Name = "GUI"
	GUI.ResetOnSpawn = false
	GUI.Parent = player:WaitForChild("PlayerGui")

	local frame = Instance.new("Frame")
	frame.Name = "frame"
	frame.Position = UDim2.new(0.5, 0, 0.5, 0)
	frame.Size = UDim2.new(0, 400, 0, 250)
	frame.AnchorPoint = Vector2.new(0.5, 0.5)
	frame.BackgroundColor3 = Color3.fromRGB(30, 30, 30)
	frame.BorderSizePixel = 0
	frame.Parent = GUI

	local uiCorner1 = Instance.new("UICorner")
	uiCorner1.CornerRadius = UDim.new(0, 12)
	uiCorner1.Parent = frame

	local text = Instance.new("TextLabel")
	text.Name = "text"
	text.Position = UDim2.new(0, 20, 0, 20)
	text.Size = UDim2.new(1, -40, 1, -40)
	text.BackgroundTransparency = 1
	text.Text = "This isn't a cookie grabber. No literally. You check the source. This is just a frame and prints. Funny troll right?"
	text.TextColor3 = Color3.fromRGB(255, 255, 255)
	text.TextScaled = true
	text.Font = Enum.Font.GothamBold
	text.TextWrapped = true
	text.Parent = frame
end

printingAction()
createGui()
