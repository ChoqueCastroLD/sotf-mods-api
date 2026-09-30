/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Crop_KeyboardInputs */

const en_upload_crop_keyboard = /** @type {(inputs: Upload_Crop_KeyboardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Arrows move · Shift moves faster · + and − resize`)
};

const es_upload_crop_keyboard = /** @type {(inputs: Upload_Crop_KeyboardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Flechas para mover · Mayús para ir más rápido · + y − para redimensionar`)
};

const de_upload_crop_keyboard = /** @type {(inputs: Upload_Crop_KeyboardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pfeile bewegen · Umschalt bewegt schneller · + und − ändern die Größe`)
};

const fr_upload_crop_keyboard = /** @type {(inputs: Upload_Crop_KeyboardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Flèches pour déplacer · Maj pour aller plus vite · + et − pour redimensionner`)
};

const it_upload_crop_keyboard = /** @type {(inputs: Upload_Crop_KeyboardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Frecce per spostare · Maiusc per andare più veloce · + e − per ridimensionare`)
};

const nl_upload_crop_keyboard = /** @type {(inputs: Upload_Crop_KeyboardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pijlen verplaatsen · Shift gaat sneller · + en − veranderen de grootte`)
};

const pl_upload_crop_keyboard = /** @type {(inputs: Upload_Crop_KeyboardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Strzałki przesuwają · Shift przyspiesza · + i − zmieniają rozmiar`)
};

const pt_upload_crop_keyboard = /** @type {(inputs: Upload_Crop_KeyboardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Setas movem · Shift move mais rápido · + e − redimensionam`)
};

const ru_upload_crop_keyboard = /** @type {(inputs: Upload_Crop_KeyboardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Стрелки двигают · Shift — быстрее · + и − меняют размер`)
};

const sv_upload_crop_keyboard = /** @type {(inputs: Upload_Crop_KeyboardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pilar flyttar · Skift går snabbare · + och − ändrar storlek`)
};

const tr_upload_crop_keyboard = /** @type {(inputs: Upload_Crop_KeyboardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oklar taşır · Shift hızlandırır · + ve − boyutlandırır`)
};

const zh_upload_crop_keyboard = /** @type {(inputs: Upload_Crop_KeyboardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`方向键移动 · Shift 加速 · + 和 − 调整大小`)
};

const ja_upload_crop_keyboard = /** @type {(inputs: Upload_Crop_KeyboardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`矢印で移動 · Shiftで速く · ＋と－でサイズ変更`)
};

/**
* | output |
* | --- |
* | "Arrows move · Shift moves faster · + and − resize" |
*
* @param {Upload_Crop_KeyboardInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_crop_keyboard = /** @type {((inputs?: Upload_Crop_KeyboardInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Crop_KeyboardInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_crop_keyboard(inputs)
	if (locale === "de") return de_upload_crop_keyboard(inputs)
	if (locale === "fr") return fr_upload_crop_keyboard(inputs)
	if (locale === "it") return it_upload_crop_keyboard(inputs)
	if (locale === "nl") return nl_upload_crop_keyboard(inputs)
	if (locale === "pl") return pl_upload_crop_keyboard(inputs)
	if (locale === "pt") return pt_upload_crop_keyboard(inputs)
	if (locale === "ru") return ru_upload_crop_keyboard(inputs)
	if (locale === "sv") return sv_upload_crop_keyboard(inputs)
	if (locale === "tr") return tr_upload_crop_keyboard(inputs)
	if (locale === "zh") return zh_upload_crop_keyboard(inputs)
	if (locale === "ja") return ja_upload_crop_keyboard(inputs)
	return en_upload_crop_keyboard(inputs)
});
