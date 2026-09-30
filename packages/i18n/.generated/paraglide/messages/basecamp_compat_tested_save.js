/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Compat_Tested_SaveInputs */

const en_basecamp_compat_tested_save = /** @type {(inputs: Basecamp_Compat_Tested_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Save tested builds`)
};

const es_basecamp_compat_tested_save = /** @type {(inputs: Basecamp_Compat_Tested_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Guardar builds probadas`)
};

const de_basecamp_compat_tested_save = /** @type {(inputs: Basecamp_Compat_Tested_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Getestete Builds speichern`)
};

const fr_basecamp_compat_tested_save = /** @type {(inputs: Basecamp_Compat_Tested_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enregistrer les builds testés`)
};

const it_basecamp_compat_tested_save = /** @type {(inputs: Basecamp_Compat_Tested_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Salva le build testate`)
};

const nl_basecamp_compat_tested_save = /** @type {(inputs: Basecamp_Compat_Tested_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geteste builds opslaan`)
};

const pl_basecamp_compat_tested_save = /** @type {(inputs: Basecamp_Compat_Tested_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zapisz przetestowane buildy`)
};

const pt_basecamp_compat_tested_save = /** @type {(inputs: Basecamp_Compat_Tested_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Salvar builds testadas`)
};

const ru_basecamp_compat_tested_save = /** @type {(inputs: Basecamp_Compat_Tested_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сохранить проверенные билды`)
};

const sv_basecamp_compat_tested_save = /** @type {(inputs: Basecamp_Compat_Tested_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spara testade builds`)
};

const tr_basecamp_compat_tested_save = /** @type {(inputs: Basecamp_Compat_Tested_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Test edilen sürümleri kaydet`)
};

const zh_basecamp_compat_tested_save = /** @type {(inputs: Basecamp_Compat_Tested_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`保存已测试版本`)
};

const ja_basecamp_compat_tested_save = /** @type {(inputs: Basecamp_Compat_Tested_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`確認済みビルドを保存`)
};

/**
* | output |
* | --- |
* | "Save tested builds" |
*
* @param {Basecamp_Compat_Tested_SaveInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_compat_tested_save = /** @type {((inputs?: Basecamp_Compat_Tested_SaveInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Compat_Tested_SaveInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_compat_tested_save(inputs)
	if (locale === "de") return de_basecamp_compat_tested_save(inputs)
	if (locale === "fr") return fr_basecamp_compat_tested_save(inputs)
	if (locale === "it") return it_basecamp_compat_tested_save(inputs)
	if (locale === "nl") return nl_basecamp_compat_tested_save(inputs)
	if (locale === "pl") return pl_basecamp_compat_tested_save(inputs)
	if (locale === "pt") return pt_basecamp_compat_tested_save(inputs)
	if (locale === "ru") return ru_basecamp_compat_tested_save(inputs)
	if (locale === "sv") return sv_basecamp_compat_tested_save(inputs)
	if (locale === "tr") return tr_basecamp_compat_tested_save(inputs)
	if (locale === "zh") return zh_basecamp_compat_tested_save(inputs)
	if (locale === "ja") return ja_basecamp_compat_tested_save(inputs)
	return en_basecamp_compat_tested_save(inputs)
});
