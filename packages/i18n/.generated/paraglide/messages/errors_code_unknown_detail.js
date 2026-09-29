/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Errors_Code_Unknown_DetailInputs */

const en_errors_code_unknown_detail = /** @type {(inputs: Errors_Code_Unknown_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The request failed for an unexpected reason. Try again; if it keeps happening, tell us the reference below.`)
};

const es_errors_code_unknown_detail = /** @type {(inputs: Errors_Code_Unknown_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La petición falló por un motivo inesperado. Vuelve a intentarlo; si sigue pasando, envíanos la referencia de abajo.`)
};

const de_errors_code_unknown_detail = /** @type {(inputs: Errors_Code_Unknown_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Anfrage ist aus einem unerwarteten Grund fehlgeschlagen. Versuch es erneut; wenn es weiter passiert, nenn uns die Referenz unten.`)
};

const fr_errors_code_unknown_detail = /** @type {(inputs: Errors_Code_Unknown_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La requête a échoué pour une raison inattendue. Réessayez ; si le problème persiste, transmettez-nous la référence ci-dessous.`)
};

const it_errors_code_unknown_detail = /** @type {(inputs: Errors_Code_Unknown_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La richiesta non è riuscita per un motivo imprevisto. Riprova; se continua a succedere, inviaci il riferimento qui sotto.`)
};

const nl_errors_code_unknown_detail = /** @type {(inputs: Errors_Code_Unknown_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Het verzoek is om een onverwachte reden mislukt. Probeer het opnieuw; blijft het gebeuren, geef ons dan de referentie hieronder.`)
};

const pl_errors_code_unknown_detail = /** @type {(inputs: Errors_Code_Unknown_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Żądanie nie powiodło się z nieoczekiwanego powodu. Spróbuj ponownie; jeśli problem się powtarza, podaj nam poniższy identyfikator.`)
};

const pt_errors_code_unknown_detail = /** @type {(inputs: Errors_Code_Unknown_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A solicitação falhou por um motivo inesperado. Tente de novo; se continuar acontecendo, envie para a gente a referência abaixo.`)
};

const ru_errors_code_unknown_detail = /** @type {(inputs: Errors_Code_Unknown_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Запрос не выполнен по непредвиденной причине. Попробуйте снова; если ошибка повторяется, сообщите нам номер ниже.`)
};

const sv_errors_code_unknown_detail = /** @type {(inputs: Errors_Code_Unknown_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Begäran misslyckades av en oväntad anledning. Försök igen; om det fortsätter, skicka oss referensen nedan.`)
};

const tr_errors_code_unknown_detail = /** @type {(inputs: Errors_Code_Unknown_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İstek beklenmedik bir nedenle başarısız oldu. Tekrar dene; sorun sürerse aşağıdaki referansı bize ilet.`)
};

const zh_errors_code_unknown_detail = /** @type {(inputs: Errors_Code_Unknown_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请求因意外原因失败。请重试；如果问题持续出现，请把下方的参考编号告诉我们。`)
};

const ja_errors_code_unknown_detail = /** @type {(inputs: Errors_Code_Unknown_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`予期しない理由でリクエストが失敗しました。もう一度お試しください。繰り返し起きる場合は、下の参照番号をお知らせください。`)
};

/**
* | output |
* | --- |
* | "The request failed for an unexpected reason. Try again; if it keeps happening, tell us the reference below." |
*
* @param {Errors_Code_Unknown_DetailInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const errors_code_unknown_detail = /** @type {((inputs?: Errors_Code_Unknown_DetailInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Errors_Code_Unknown_DetailInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_errors_code_unknown_detail(inputs)
	if (locale === "de") return de_errors_code_unknown_detail(inputs)
	if (locale === "fr") return fr_errors_code_unknown_detail(inputs)
	if (locale === "it") return it_errors_code_unknown_detail(inputs)
	if (locale === "nl") return nl_errors_code_unknown_detail(inputs)
	if (locale === "pl") return pl_errors_code_unknown_detail(inputs)
	if (locale === "pt") return pt_errors_code_unknown_detail(inputs)
	if (locale === "ru") return ru_errors_code_unknown_detail(inputs)
	if (locale === "sv") return sv_errors_code_unknown_detail(inputs)
	if (locale === "tr") return tr_errors_code_unknown_detail(inputs)
	if (locale === "zh") return zh_errors_code_unknown_detail(inputs)
	if (locale === "ja") return ja_errors_code_unknown_detail(inputs)
	return en_errors_code_unknown_detail(inputs)
});
