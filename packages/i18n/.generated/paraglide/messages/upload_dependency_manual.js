/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Dependency_ManualInputs */

const en_upload_dependency_manual = /** @type {(inputs: Upload_Dependency_ManualInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Or type a manifest id`)
};

const es_upload_dependency_manual = /** @type {(inputs: Upload_Dependency_ManualInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O escribe un id de manifest`)
};

const de_upload_dependency_manual = /** @type {(inputs: Upload_Dependency_ManualInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oder gib eine Manifest-ID ein`)
};

const fr_upload_dependency_manual = /** @type {(inputs: Upload_Dependency_ManualInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ou saisissez un id de manifest`)
};

const it_upload_dependency_manual = /** @type {(inputs: Upload_Dependency_ManualInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oppure scrivi un id del manifest`)
};

const nl_upload_dependency_manual = /** @type {(inputs: Upload_Dependency_ManualInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Of typ een manifest-id`)
};

const pl_upload_dependency_manual = /** @type {(inputs: Upload_Dependency_ManualInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Albo wpisz identyfikator manifestu`)
};

const pt_upload_dependency_manual = /** @type {(inputs: Upload_Dependency_ManualInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ou digite um id de manifest`)
};

const ru_upload_dependency_manual = /** @type {(inputs: Upload_Dependency_ManualInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Или введите id из манифеста`)
};

const sv_upload_dependency_manual = /** @type {(inputs: Upload_Dependency_ManualInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eller skriv ett manifest-id`)
};

const tr_upload_dependency_manual = /** @type {(inputs: Upload_Dependency_ManualInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ya da bir manifest kimliği yaz`)
};

const zh_upload_dependency_manual = /** @type {(inputs: Upload_Dependency_ManualInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`或输入清单 ID`)
};

const ja_upload_dependency_manual = /** @type {(inputs: Upload_Dependency_ManualInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`またはマニフェストIDを入力`)
};

/**
* | output |
* | --- |
* | "Or type a manifest id" |
*
* @param {Upload_Dependency_ManualInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_dependency_manual = /** @type {((inputs?: Upload_Dependency_ManualInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Dependency_ManualInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_dependency_manual(inputs)
	if (locale === "de") return de_upload_dependency_manual(inputs)
	if (locale === "fr") return fr_upload_dependency_manual(inputs)
	if (locale === "it") return it_upload_dependency_manual(inputs)
	if (locale === "nl") return nl_upload_dependency_manual(inputs)
	if (locale === "pl") return pl_upload_dependency_manual(inputs)
	if (locale === "pt") return pt_upload_dependency_manual(inputs)
	if (locale === "ru") return ru_upload_dependency_manual(inputs)
	if (locale === "sv") return sv_upload_dependency_manual(inputs)
	if (locale === "tr") return tr_upload_dependency_manual(inputs)
	if (locale === "zh") return zh_upload_dependency_manual(inputs)
	if (locale === "ja") return ja_upload_dependency_manual(inputs)
	return en_upload_dependency_manual(inputs)
});
