/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Failure_ApiInputs */

const en_upload_failure_api = /** @type {(inputs: Upload_Failure_ApiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Something went wrong on our side. Try again in a moment.`)
};

const es_upload_failure_api = /** @type {(inputs: Upload_Failure_ApiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Algo falló por nuestra parte. Inténtalo de nuevo en un momento.`)
};

const de_upload_failure_api = /** @type {(inputs: Upload_Failure_ApiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bei uns ist etwas schiefgelaufen. Versuch es gleich noch einmal.`)
};

const fr_upload_failure_api = /** @type {(inputs: Upload_Failure_ApiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un problème est survenu de notre côté. Réessayez dans un instant.`)
};

const it_upload_failure_api = /** @type {(inputs: Upload_Failure_ApiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Qualcosa è andato storto da parte nostra. Riprova tra poco.`)
};

const nl_upload_failure_api = /** @type {(inputs: Upload_Failure_ApiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Er ging iets mis bij ons. Probeer het zo opnieuw.`)
};

const pl_upload_failure_api = /** @type {(inputs: Upload_Failure_ApiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Coś poszło nie tak po naszej stronie. Spróbuj za chwilę.`)
};

const pt_upload_failure_api = /** @type {(inputs: Upload_Failure_ApiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Algo deu errado do nosso lado. Tente de novo em instantes.`)
};

const ru_upload_failure_api = /** @type {(inputs: Upload_Failure_ApiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Что-то пошло не так на нашей стороне. Попробуйте чуть позже.`)
};

const sv_upload_failure_api = /** @type {(inputs: Upload_Failure_ApiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Något gick fel hos oss. Försök igen om en stund.`)
};

const tr_upload_failure_api = /** @type {(inputs: Upload_Failure_ApiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bizim tarafımızda bir sorun oluştu. Birazdan tekrar dene.`)
};

const zh_upload_failure_api = /** @type {(inputs: Upload_Failure_ApiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`我们这边出了问题，请稍后再试。`)
};

const ja_upload_failure_api = /** @type {(inputs: Upload_Failure_ApiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`サーバー側で問題が発生しました。少し待ってから再試行してください。`)
};

/**
* | output |
* | --- |
* | "Something went wrong on our side. Try again in a moment." |
*
* @param {Upload_Failure_ApiInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_failure_api = /** @type {((inputs?: Upload_Failure_ApiInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Failure_ApiInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_failure_api(inputs)
	if (locale === "de") return de_upload_failure_api(inputs)
	if (locale === "fr") return fr_upload_failure_api(inputs)
	if (locale === "it") return it_upload_failure_api(inputs)
	if (locale === "nl") return nl_upload_failure_api(inputs)
	if (locale === "pl") return pl_upload_failure_api(inputs)
	if (locale === "pt") return pt_upload_failure_api(inputs)
	if (locale === "ru") return ru_upload_failure_api(inputs)
	if (locale === "sv") return sv_upload_failure_api(inputs)
	if (locale === "tr") return tr_upload_failure_api(inputs)
	if (locale === "zh") return zh_upload_failure_api(inputs)
	if (locale === "ja") return ja_upload_failure_api(inputs)
	return en_upload_failure_api(inputs)
});
