/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_State_SavingInputs */

const en_common_state_saving = /** @type {(inputs: Common_State_SavingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Saving…`)
};

const es_common_state_saving = /** @type {(inputs: Common_State_SavingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Guardando…`)
};

const de_common_state_saving = /** @type {(inputs: Common_State_SavingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wird gespeichert …`)
};

const fr_common_state_saving = /** @type {(inputs: Common_State_SavingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enregistrement…`)
};

const it_common_state_saving = /** @type {(inputs: Common_State_SavingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Salvataggio…`)
};

const nl_common_state_saving = /** @type {(inputs: Common_State_SavingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opslaan…`)
};

const pl_common_state_saving = /** @type {(inputs: Common_State_SavingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zapisywanie…`)
};

const pt_common_state_saving = /** @type {(inputs: Common_State_SavingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Salvando…`)
};

const ru_common_state_saving = /** @type {(inputs: Common_State_SavingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сохранение…`)
};

const sv_common_state_saving = /** @type {(inputs: Common_State_SavingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sparar…`)
};

const tr_common_state_saving = /** @type {(inputs: Common_State_SavingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kaydediliyor…`)
};

const zh_common_state_saving = /** @type {(inputs: Common_State_SavingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`正在保存…`)
};

const ja_common_state_saving = /** @type {(inputs: Common_State_SavingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`保存しています…`)
};

/**
* | output |
* | --- |
* | "Saving…" |
*
* @param {Common_State_SavingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_state_saving = /** @type {((inputs?: Common_State_SavingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_State_SavingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_state_saving(inputs)
	if (locale === "de") return de_common_state_saving(inputs)
	if (locale === "fr") return fr_common_state_saving(inputs)
	if (locale === "it") return it_common_state_saving(inputs)
	if (locale === "nl") return nl_common_state_saving(inputs)
	if (locale === "pl") return pl_common_state_saving(inputs)
	if (locale === "pt") return pt_common_state_saving(inputs)
	if (locale === "ru") return ru_common_state_saving(inputs)
	if (locale === "sv") return sv_common_state_saving(inputs)
	if (locale === "tr") return tr_common_state_saving(inputs)
	if (locale === "zh") return zh_common_state_saving(inputs)
	if (locale === "ja") return ja_common_state_saving(inputs)
	return en_common_state_saving(inputs)
});
