/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_SaveInputs */

const en_basecamp_save = /** @type {(inputs: Basecamp_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Save changes`)
};

const es_basecamp_save = /** @type {(inputs: Basecamp_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Guardar cambios`)
};

const de_basecamp_save = /** @type {(inputs: Basecamp_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Änderungen speichern`)
};

const fr_basecamp_save = /** @type {(inputs: Basecamp_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enregistrer`)
};

const it_basecamp_save = /** @type {(inputs: Basecamp_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Salva le modifiche`)
};

const nl_basecamp_save = /** @type {(inputs: Basecamp_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wijzigingen opslaan`)
};

const pl_basecamp_save = /** @type {(inputs: Basecamp_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zapisz zmiany`)
};

const pt_basecamp_save = /** @type {(inputs: Basecamp_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Salvar alterações`)
};

const ru_basecamp_save = /** @type {(inputs: Basecamp_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сохранить изменения`)
};

const sv_basecamp_save = /** @type {(inputs: Basecamp_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spara ändringar`)
};

const tr_basecamp_save = /** @type {(inputs: Basecamp_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Değişiklikleri kaydet`)
};

const zh_basecamp_save = /** @type {(inputs: Basecamp_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`保存更改`)
};

const ja_basecamp_save = /** @type {(inputs: Basecamp_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`変更を保存`)
};

/**
* | output |
* | --- |
* | "Save changes" |
*
* @param {Basecamp_SaveInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_save = /** @type {((inputs?: Basecamp_SaveInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_SaveInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_save(inputs)
	if (locale === "de") return de_basecamp_save(inputs)
	if (locale === "fr") return fr_basecamp_save(inputs)
	if (locale === "it") return it_basecamp_save(inputs)
	if (locale === "nl") return nl_basecamp_save(inputs)
	if (locale === "pl") return pl_basecamp_save(inputs)
	if (locale === "pt") return pt_basecamp_save(inputs)
	if (locale === "ru") return ru_basecamp_save(inputs)
	if (locale === "sv") return sv_basecamp_save(inputs)
	if (locale === "tr") return tr_basecamp_save(inputs)
	if (locale === "zh") return zh_basecamp_save(inputs)
	if (locale === "ja") return ja_basecamp_save(inputs)
	return en_basecamp_save(inputs)
});
