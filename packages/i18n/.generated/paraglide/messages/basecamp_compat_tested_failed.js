/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Compat_Tested_FailedInputs */

const en_basecamp_compat_tested_failed = /** @type {(inputs: Basecamp_Compat_Tested_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The tested builds could not be saved`)
};

const es_basecamp_compat_tested_failed = /** @type {(inputs: Basecamp_Compat_Tested_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se pudieron guardar las builds probadas`)
};

const de_basecamp_compat_tested_failed = /** @type {(inputs: Basecamp_Compat_Tested_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die getesteten Builds konnten nicht gespeichert werden`)
};

const fr_basecamp_compat_tested_failed = /** @type {(inputs: Basecamp_Compat_Tested_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les builds testés n’ont pas pu être enregistrés`)
};

const it_basecamp_compat_tested_failed = /** @type {(inputs: Basecamp_Compat_Tested_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non è stato possibile salvare le build testate`)
};

const nl_basecamp_compat_tested_failed = /** @type {(inputs: Basecamp_Compat_Tested_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De geteste builds konden niet worden opgeslagen`)
};

const pl_basecamp_compat_tested_failed = /** @type {(inputs: Basecamp_Compat_Tested_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się zapisać przetestowanych buildów`)
};

const pt_basecamp_compat_tested_failed = /** @type {(inputs: Basecamp_Compat_Tested_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi possível salvar as builds testadas`)
};

const ru_basecamp_compat_tested_failed = /** @type {(inputs: Basecamp_Compat_Tested_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не удалось сохранить проверенные билды`)
};

const sv_basecamp_compat_tested_failed = /** @type {(inputs: Basecamp_Compat_Tested_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De testade builds kunde inte sparas`)
};

const tr_basecamp_compat_tested_failed = /** @type {(inputs: Basecamp_Compat_Tested_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Test edilen sürümler kaydedilemedi`)
};

const zh_basecamp_compat_tested_failed = /** @type {(inputs: Basecamp_Compat_Tested_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无法保存已测试版本`)
};

const ja_basecamp_compat_tested_failed = /** @type {(inputs: Basecamp_Compat_Tested_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`確認済みビルドを保存できませんでした`)
};

/**
* | output |
* | --- |
* | "The tested builds could not be saved" |
*
* @param {Basecamp_Compat_Tested_FailedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_compat_tested_failed = /** @type {((inputs?: Basecamp_Compat_Tested_FailedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Compat_Tested_FailedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_compat_tested_failed(inputs)
	if (locale === "de") return de_basecamp_compat_tested_failed(inputs)
	if (locale === "fr") return fr_basecamp_compat_tested_failed(inputs)
	if (locale === "it") return it_basecamp_compat_tested_failed(inputs)
	if (locale === "nl") return nl_basecamp_compat_tested_failed(inputs)
	if (locale === "pl") return pl_basecamp_compat_tested_failed(inputs)
	if (locale === "pt") return pt_basecamp_compat_tested_failed(inputs)
	if (locale === "ru") return ru_basecamp_compat_tested_failed(inputs)
	if (locale === "sv") return sv_basecamp_compat_tested_failed(inputs)
	if (locale === "tr") return tr_basecamp_compat_tested_failed(inputs)
	if (locale === "zh") return zh_basecamp_compat_tested_failed(inputs)
	if (locale === "ja") return ja_basecamp_compat_tested_failed(inputs)
	return en_basecamp_compat_tested_failed(inputs)
});
