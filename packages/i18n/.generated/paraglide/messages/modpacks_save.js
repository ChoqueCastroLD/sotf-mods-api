/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Modpacks_SaveInputs */

const en_modpacks_save = /** @type {(inputs: Modpacks_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Save`)
};

const es_modpacks_save = /** @type {(inputs: Modpacks_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Guardar`)
};

const de_modpacks_save = /** @type {(inputs: Modpacks_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Speichern`)
};

const fr_modpacks_save = /** @type {(inputs: Modpacks_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enregistrer`)
};

const it_modpacks_save = /** @type {(inputs: Modpacks_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Salva`)
};

const nl_modpacks_save = /** @type {(inputs: Modpacks_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opslaan`)
};

const pl_modpacks_save = /** @type {(inputs: Modpacks_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zapisz`)
};

const pt_modpacks_save = /** @type {(inputs: Modpacks_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Salvar`)
};

const ru_modpacks_save = /** @type {(inputs: Modpacks_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сохранить`)
};

const sv_modpacks_save = /** @type {(inputs: Modpacks_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spara`)
};

const tr_modpacks_save = /** @type {(inputs: Modpacks_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kaydet`)
};

const zh_modpacks_save = /** @type {(inputs: Modpacks_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`保存`)
};

const ja_modpacks_save = /** @type {(inputs: Modpacks_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`保存`)
};

/**
* | output |
* | --- |
* | "Save" |
*
* @param {Modpacks_SaveInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_save = /** @type {((inputs?: Modpacks_SaveInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_SaveInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_save(inputs)
	if (locale === "de") return de_modpacks_save(inputs)
	if (locale === "fr") return fr_modpacks_save(inputs)
	if (locale === "it") return it_modpacks_save(inputs)
	if (locale === "nl") return nl_modpacks_save(inputs)
	if (locale === "pl") return pl_modpacks_save(inputs)
	if (locale === "pt") return pt_modpacks_save(inputs)
	if (locale === "ru") return ru_modpacks_save(inputs)
	if (locale === "sv") return sv_modpacks_save(inputs)
	if (locale === "tr") return tr_modpacks_save(inputs)
	if (locale === "zh") return zh_modpacks_save(inputs)
	if (locale === "ja") return ja_modpacks_save(inputs)
	return en_modpacks_save(inputs)
});
