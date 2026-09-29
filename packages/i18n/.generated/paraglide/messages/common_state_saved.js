/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_State_SavedInputs */

const en_common_state_saved = /** @type {(inputs: Common_State_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Saved`)
};

const es_common_state_saved = /** @type {(inputs: Common_State_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Guardado`)
};

const de_common_state_saved = /** @type {(inputs: Common_State_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gespeichert`)
};

const fr_common_state_saved = /** @type {(inputs: Common_State_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enregistré`)
};

const it_common_state_saved = /** @type {(inputs: Common_State_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Salvato`)
};

const nl_common_state_saved = /** @type {(inputs: Common_State_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opgeslagen`)
};

const pl_common_state_saved = /** @type {(inputs: Common_State_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zapisano`)
};

const pt_common_state_saved = /** @type {(inputs: Common_State_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Salvo`)
};

const ru_common_state_saved = /** @type {(inputs: Common_State_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сохранено`)
};

const sv_common_state_saved = /** @type {(inputs: Common_State_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sparat`)
};

const tr_common_state_saved = /** @type {(inputs: Common_State_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kaydedildi`)
};

const zh_common_state_saved = /** @type {(inputs: Common_State_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已保存`)
};

const ja_common_state_saved = /** @type {(inputs: Common_State_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`保存しました`)
};

/**
* | output |
* | --- |
* | "Saved" |
*
* @param {Common_State_SavedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_state_saved = /** @type {((inputs?: Common_State_SavedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_State_SavedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_state_saved(inputs)
	if (locale === "de") return de_common_state_saved(inputs)
	if (locale === "fr") return fr_common_state_saved(inputs)
	if (locale === "it") return it_common_state_saved(inputs)
	if (locale === "nl") return nl_common_state_saved(inputs)
	if (locale === "pl") return pl_common_state_saved(inputs)
	if (locale === "pt") return pt_common_state_saved(inputs)
	if (locale === "ru") return ru_common_state_saved(inputs)
	if (locale === "sv") return sv_common_state_saved(inputs)
	if (locale === "tr") return tr_common_state_saved(inputs)
	if (locale === "zh") return zh_common_state_saved(inputs)
	if (locale === "ja") return ja_common_state_saved(inputs)
	return en_common_state_saved(inputs)
});
