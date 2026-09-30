/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Multiplayer_LabelInputs */

const en_upload_multiplayer_label = /** @type {(inputs: Upload_Multiplayer_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Multiplayer`)
};

const es_upload_multiplayer_label = /** @type {(inputs: Upload_Multiplayer_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Multijugador`)
};

const de_upload_multiplayer_label = /** @type {(inputs: Upload_Multiplayer_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mehrspieler`)
};

const fr_upload_multiplayer_label = /** @type {(inputs: Upload_Multiplayer_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Multijoueur`)
};

const it_upload_multiplayer_label = /** @type {(inputs: Upload_Multiplayer_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Multigiocatore`)
};

const nl_upload_multiplayer_label = /** @type {(inputs: Upload_Multiplayer_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Multiplayer`)
};

const pl_upload_multiplayer_label = /** @type {(inputs: Upload_Multiplayer_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tryb wieloosobowy`)
};

const pt_upload_multiplayer_label = /** @type {(inputs: Upload_Multiplayer_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Multijogador`)
};

const ru_upload_multiplayer_label = /** @type {(inputs: Upload_Multiplayer_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Мультиплеер`)
};

const sv_upload_multiplayer_label = /** @type {(inputs: Upload_Multiplayer_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Flerspelare`)
};

const tr_upload_multiplayer_label = /** @type {(inputs: Upload_Multiplayer_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Çok oyunculu`)
};

const zh_upload_multiplayer_label = /** @type {(inputs: Upload_Multiplayer_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`多人游戏`)
};

const ja_upload_multiplayer_label = /** @type {(inputs: Upload_Multiplayer_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`マルチプレイ`)
};

/**
* | output |
* | --- |
* | "Multiplayer" |
*
* @param {Upload_Multiplayer_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_multiplayer_label = /** @type {((inputs?: Upload_Multiplayer_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Multiplayer_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_multiplayer_label(inputs)
	if (locale === "de") return de_upload_multiplayer_label(inputs)
	if (locale === "fr") return fr_upload_multiplayer_label(inputs)
	if (locale === "it") return it_upload_multiplayer_label(inputs)
	if (locale === "nl") return nl_upload_multiplayer_label(inputs)
	if (locale === "pl") return pl_upload_multiplayer_label(inputs)
	if (locale === "pt") return pt_upload_multiplayer_label(inputs)
	if (locale === "ru") return ru_upload_multiplayer_label(inputs)
	if (locale === "sv") return sv_upload_multiplayer_label(inputs)
	if (locale === "tr") return tr_upload_multiplayer_label(inputs)
	if (locale === "zh") return zh_upload_multiplayer_label(inputs)
	if (locale === "ja") return ja_upload_multiplayer_label(inputs)
	return en_upload_multiplayer_label(inputs)
});
