/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Action_SaveInputs */

const en_common_action_save = /** @type {(inputs: Common_Action_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Save`)
};

const es_common_action_save = /** @type {(inputs: Common_Action_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Guardar`)
};

const de_common_action_save = /** @type {(inputs: Common_Action_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Speichern`)
};

const fr_common_action_save = /** @type {(inputs: Common_Action_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enregistrer`)
};

const it_common_action_save = /** @type {(inputs: Common_Action_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Salva`)
};

const nl_common_action_save = /** @type {(inputs: Common_Action_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opslaan`)
};

const pl_common_action_save = /** @type {(inputs: Common_Action_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zapisz`)
};

const pt_common_action_save = /** @type {(inputs: Common_Action_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Salvar`)
};

const ru_common_action_save = /** @type {(inputs: Common_Action_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сохранить`)
};

const sv_common_action_save = /** @type {(inputs: Common_Action_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spara`)
};

const tr_common_action_save = /** @type {(inputs: Common_Action_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kaydet`)
};

const zh_common_action_save = /** @type {(inputs: Common_Action_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`保存`)
};

const ja_common_action_save = /** @type {(inputs: Common_Action_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`保存`)
};

/**
* | output |
* | --- |
* | "Save" |
*
* @param {Common_Action_SaveInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_action_save = /** @type {((inputs?: Common_Action_SaveInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Action_SaveInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_action_save(inputs)
	if (locale === "de") return de_common_action_save(inputs)
	if (locale === "fr") return fr_common_action_save(inputs)
	if (locale === "it") return it_common_action_save(inputs)
	if (locale === "nl") return nl_common_action_save(inputs)
	if (locale === "pl") return pl_common_action_save(inputs)
	if (locale === "pt") return pt_common_action_save(inputs)
	if (locale === "ru") return ru_common_action_save(inputs)
	if (locale === "sv") return sv_common_action_save(inputs)
	if (locale === "tr") return tr_common_action_save(inputs)
	if (locale === "zh") return zh_common_action_save(inputs)
	if (locale === "ja") return ja_common_action_save(inputs)
	return en_common_action_save(inputs)
});
