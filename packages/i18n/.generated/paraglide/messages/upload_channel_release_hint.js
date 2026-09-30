/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Channel_Release_HintInputs */

const en_upload_channel_release_hint = /** @type {(inputs: Upload_Channel_Release_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`For everyone. Becomes the latest version.`)
};

const es_upload_channel_release_hint = /** @type {(inputs: Upload_Channel_Release_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Para todos. Pasa a ser la última versión.`)
};

const de_upload_channel_release_hint = /** @type {(inputs: Upload_Channel_Release_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Für alle. Wird zur neuesten Version.`)
};

const fr_upload_channel_release_hint = /** @type {(inputs: Upload_Channel_Release_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pour tout le monde. Devient la dernière version.`)
};

const it_upload_channel_release_hint = /** @type {(inputs: Upload_Channel_Release_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Per tutti. Diventa l’ultima versione.`)
};

const nl_upload_channel_release_hint = /** @type {(inputs: Upload_Channel_Release_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voor iedereen. Wordt de nieuwste versie.`)
};

const pl_upload_channel_release_hint = /** @type {(inputs: Upload_Channel_Release_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dla wszystkich. Staje się najnowszą wersją.`)
};

const pt_upload_channel_release_hint = /** @type {(inputs: Upload_Channel_Release_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Para todos. Passa a ser a versão mais recente.`)
};

const ru_upload_channel_release_hint = /** @type {(inputs: Upload_Channel_Release_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Для всех. Становится последней версией.`)
};

const sv_upload_channel_release_hint = /** @type {(inputs: Upload_Channel_Release_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`För alla. Blir den senaste versionen.`)
};

const tr_upload_channel_release_hint = /** @type {(inputs: Upload_Channel_Release_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Herkes için. En son sürüm olur.`)
};

const zh_upload_channel_release_hint = /** @type {(inputs: Upload_Channel_Release_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`面向所有人，成为最新版本。`)
};

const ja_upload_channel_release_hint = /** @type {(inputs: Upload_Channel_Release_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`全員向け。最新バージョンになります。`)
};

/**
* | output |
* | --- |
* | "For everyone. Becomes the latest version." |
*
* @param {Upload_Channel_Release_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_channel_release_hint = /** @type {((inputs?: Upload_Channel_Release_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Channel_Release_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_channel_release_hint(inputs)
	if (locale === "de") return de_upload_channel_release_hint(inputs)
	if (locale === "fr") return fr_upload_channel_release_hint(inputs)
	if (locale === "it") return it_upload_channel_release_hint(inputs)
	if (locale === "nl") return nl_upload_channel_release_hint(inputs)
	if (locale === "pl") return pl_upload_channel_release_hint(inputs)
	if (locale === "pt") return pt_upload_channel_release_hint(inputs)
	if (locale === "ru") return ru_upload_channel_release_hint(inputs)
	if (locale === "sv") return sv_upload_channel_release_hint(inputs)
	if (locale === "tr") return tr_upload_channel_release_hint(inputs)
	if (locale === "zh") return zh_upload_channel_release_hint(inputs)
	if (locale === "ja") return ja_upload_channel_release_hint(inputs)
	return en_upload_channel_release_hint(inputs)
});
