/* Core CSS required for Ionic components to work properly */
import '@ionic/core/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/core/css/normalize.css';
import '@ionic/core/css/structure.css';
import '@ionic/core/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/core/css/display.css';
import '@ionic/core/css/flex-utils.css';
import '@ionic/core/css/float-elements.css';
import '@ionic/core/css/padding.css';
import '@ionic/core/css/text-alignment.css';
import '@ionic/core/css/text-transformation.css';

import { menuController } from '@ionic/core';

import type { IonicConfig } from '@ionic/core/components';
import { initialize } from '@ionic/core/components';

import type { MenuI } from '@ionic/core/dist/types/interface';

// all exports
export {
	actionSheetController,
	alertController,
	loadingController,
	menuController,
	pickerController,
	toastController
} from '@ionic/core';

// from setupIonicReact
export type {
	AccordionGroupChangeEventDetail,
	AccordionGroupCustomEvent,
	ActionSheetButton,
	ActionSheetOptions,
	AlertButton,
	AlertInput,
	AlertOptions,
	// TYPES
	Animation,
	AnimationBuilder,
	AnimationCallbackOptions,
	AnimationDirection,
	AnimationFill,
	AnimationKeyFrames,
	AnimationLifecycle,
	BackButtonEvent,
	BreadcrumbCollapsedClickEventDetail,
	BreadcrumbCustomEvent,
	CheckboxChangeEventDetail,
	CheckboxCustomEvent,
	DatetimeChangeEventDetail,
	DatetimeCustomEvent,
	Gesture,
	GestureConfig,
	GestureDetail,
	InfiniteScrollCustomEvent,
	InputChangeEventDetail,
	InputCustomEvent,
	IonicSafeString,
	ItemReorderCustomEvent,
	ItemReorderEventDetail,
	ItemSlidingCustomEvent,
	LoadingOptions,
	MenuCustomEvent,
	ModalOptions,
	NavComponentWithProps,
	NavCustomEvent,
	PickerButton,
	PickerColumn,
	PickerColumnOption,
	PickerOptions,
	PopoverOptions,
	RadioGroupChangeEventDetail,
	RadioGroupCustomEvent,
	RangeChangeEventDetail,
	RangeCustomEvent,
	RangeKnobMoveEndEventDetail,
	RangeKnobMoveStartEventDetail,
	RefresherCustomEvent,
	RefresherEventDetail,
	RouterCustomEvent,
	RouterEventDetail,
	ScrollBaseCustomEvent,
	ScrollBaseDetail,
	ScrollCustomEvent,
	ScrollDetail,
	SearchbarChangeEventDetail,
	SearchbarCustomEvent,
	SegmentChangeEventDetail,
	SegmentCustomEvent,
	SelectChangeEventDetail,
	SelectCustomEvent,
	SpinnerTypes,
	TabsCustomEvent,
	TextareaChangeEventDetail,
	TextareaCustomEvent,
	ToastButton,
	ToastOptions,
	ToggleChangeEventDetail,
	ToggleCustomEvent
} from '@ionic/core/components';

export {
	IonicSlides,
	// UTILS
	createAnimation,
	createGesture,
	getTimeGivenProgression,
	iosTransitionAnimation,
	mdTransitionAnimation
} from '@ionic/core/components';

export const setupIonicBase = async (config?: IonicConfig) => {
	/* Ionic initialisation */
	initialize(config);

	/* something else needed */
	if (typeof (document as any) !== 'undefined') {
		document.documentElement.classList.add('ion-ce');
	}
};

export const registerMenu = (menuId: string): boolean => {
	const query = "ion-menu[menu-id='" + menuId + "']";
	const menu = document.querySelector(query) as unknown as MenuI;

	if (menu) {
		menuController._register(menu);
	}
	return !!menu;
};
