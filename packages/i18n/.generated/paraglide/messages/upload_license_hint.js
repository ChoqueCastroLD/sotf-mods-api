/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_License_HintInputs */

const en_upload_license_hint = /** @type {(inputs: Upload_License_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`What others may do with your files.`)
};

const es_upload_license_hint = /** @type {(inputs: Upload_License_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lo que otros pueden hacer con tus archivos.`)
};

const de_upload_license_hint = /** @type {(inputs: Upload_License_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Was andere mit deinen Dateien machen dürfen.`)
};

const fr_upload_license_hint = /** @type {(inputs: Upload_License_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ce que les autres peuvent faire de vos fichiers.`)
};

const it_upload_license_hint = /** @type {(inputs: Upload_License_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cosa possono fare gli altri con i tuoi file.`)
};

const nl_upload_license_hint = /** @type {(inputs: Upload_License_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wat anderen met je bestanden mogen doen.`)
};

const pl_upload_license_hint = /** @type {(inputs: Upload_License_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Co inni mogą robić z twoimi plikami.`)
};

const pt_upload_license_hint = /** @type {(inputs: Upload_License_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O que os outros podem fazer com seus arquivos.`)
};

const ru_upload_license_hint = /** @type {(inputs: Upload_License_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Что другие могут делать с вашими файлами.`)
};

const sv_upload_license_hint = /** @type {(inputs: Upload_License_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vad andra får göra med dina filer.`)
};

const tr_upload_license_hint = /** @type {(inputs: Upload_License_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Başkalarının dosyalarınla neler yapabileceği.`)
};

const zh_upload_license_hint = /** @type {(inputs: Upload_License_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`他人可以如何使用你的文件。`)
};

const ja_upload_license_hint = /** @type {(inputs: Upload_License_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ほかの人がファイルをどう扱えるか。`)
};

/**
* | output |
* | --- |
* | "What others may do with your files." |
*
* @param {Upload_License_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_license_hint = /** @type {((inputs?: Upload_License_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_License_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_license_hint(inputs)
	if (locale === "de") return de_upload_license_hint(inputs)
	if (locale === "fr") return fr_upload_license_hint(inputs)
	if (locale === "it") return it_upload_license_hint(inputs)
	if (locale === "nl") return nl_upload_license_hint(inputs)
	if (locale === "pl") return pl_upload_license_hint(inputs)
	if (locale === "pt") return pt_upload_license_hint(inputs)
	if (locale === "ru") return ru_upload_license_hint(inputs)
	if (locale === "sv") return sv_upload_license_hint(inputs)
	if (locale === "tr") return tr_upload_license_hint(inputs)
	if (locale === "zh") return zh_upload_license_hint(inputs)
	if (locale === "ja") return ja_upload_license_hint(inputs)
	return en_upload_license_hint(inputs)
});
