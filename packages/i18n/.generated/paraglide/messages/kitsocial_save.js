/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kitsocial_SaveInputs */

const en_kitsocial_save = /** @type {(inputs: Kitsocial_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Save changes`)
};

const es_kitsocial_save = /** @type {(inputs: Kitsocial_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Guardar cambios`)
};

const de_kitsocial_save = /** @type {(inputs: Kitsocial_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Änderungen speichern`)
};

const fr_kitsocial_save = /** @type {(inputs: Kitsocial_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enregistrer`)
};

const it_kitsocial_save = /** @type {(inputs: Kitsocial_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Salva modifiche`)
};

const nl_kitsocial_save = /** @type {(inputs: Kitsocial_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wijzigingen opslaan`)
};

const pl_kitsocial_save = /** @type {(inputs: Kitsocial_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zapisz zmiany`)
};

const pt_kitsocial_save = /** @type {(inputs: Kitsocial_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Salvar alterações`)
};

const ru_kitsocial_save = /** @type {(inputs: Kitsocial_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сохранить`)
};

const sv_kitsocial_save = /** @type {(inputs: Kitsocial_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spara ändringar`)
};

const tr_kitsocial_save = /** @type {(inputs: Kitsocial_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Değişiklikleri kaydet`)
};

const zh_kitsocial_save = /** @type {(inputs: Kitsocial_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`保存修改`)
};

const ja_kitsocial_save = /** @type {(inputs: Kitsocial_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`変更を保存`)
};

/**
* | output |
* | --- |
* | "Save changes" |
*
* @param {Kitsocial_SaveInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kitsocial_save = /** @type {((inputs?: Kitsocial_SaveInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kitsocial_SaveInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kitsocial_save(inputs)
	if (locale === "de") return de_kitsocial_save(inputs)
	if (locale === "fr") return fr_kitsocial_save(inputs)
	if (locale === "it") return it_kitsocial_save(inputs)
	if (locale === "nl") return nl_kitsocial_save(inputs)
	if (locale === "pl") return pl_kitsocial_save(inputs)
	if (locale === "pt") return pt_kitsocial_save(inputs)
	if (locale === "ru") return ru_kitsocial_save(inputs)
	if (locale === "sv") return sv_kitsocial_save(inputs)
	if (locale === "tr") return tr_kitsocial_save(inputs)
	if (locale === "zh") return zh_kitsocial_save(inputs)
	if (locale === "ja") return ja_kitsocial_save(inputs)
	return en_kitsocial_save(inputs)
});
