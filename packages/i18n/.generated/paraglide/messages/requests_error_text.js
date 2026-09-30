/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Requests_Error_TextInputs */

const en_requests_error_text = /** @type {(inputs: Requests_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`We could not load the requests. Try again in a moment.`)
};

const es_requests_error_text = /** @type {(inputs: Requests_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No pudimos cargar las peticiones. Inténtalo de nuevo en un momento.`)
};

const de_requests_error_text = /** @type {(inputs: Requests_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Wünsche konnten nicht geladen werden. Versuche es gleich noch einmal.`)
};

const fr_requests_error_text = /** @type {(inputs: Requests_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossible de charger les demandes. Réessayez dans un instant.`)
};

const it_requests_error_text = /** @type {(inputs: Requests_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non siamo riusciti a caricare le richieste. Riprova tra un attimo.`)
};

const nl_requests_error_text = /** @type {(inputs: Requests_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De verzoeken konden niet worden geladen. Probeer het zo opnieuw.`)
};

const pl_requests_error_text = /** @type {(inputs: Requests_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się wczytać próśb. Spróbuj ponownie za chwilę.`)
};

const pt_requests_error_text = /** @type {(inputs: Requests_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi possível carregar os pedidos. Tente de novo daqui a pouco.`)
};

const ru_requests_error_text = /** @type {(inputs: Requests_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не удалось загрузить запросы. Повторите попытку чуть позже.`)
};

const sv_requests_error_text = /** @type {(inputs: Requests_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vi kunde inte läsa in önskemålen. Försök igen om en stund.`)
};

const tr_requests_error_text = /** @type {(inputs: Requests_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İstekler yüklenemedi. Biraz sonra tekrar deneyin.`)
};

const zh_requests_error_text = /** @type {(inputs: Requests_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无法加载请求，请稍后再试。`)
};

const ja_requests_error_text = /** @type {(inputs: Requests_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`リクエストを読み込めませんでした。しばらくしてからもう一度お試しください。`)
};

/**
* | output |
* | --- |
* | "We could not load the requests. Try again in a moment." |
*
* @param {Requests_Error_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const requests_error_text = /** @type {((inputs?: Requests_Error_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Requests_Error_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_requests_error_text(inputs)
	if (locale === "de") return de_requests_error_text(inputs)
	if (locale === "fr") return fr_requests_error_text(inputs)
	if (locale === "it") return it_requests_error_text(inputs)
	if (locale === "nl") return nl_requests_error_text(inputs)
	if (locale === "pl") return pl_requests_error_text(inputs)
	if (locale === "pt") return pt_requests_error_text(inputs)
	if (locale === "ru") return ru_requests_error_text(inputs)
	if (locale === "sv") return sv_requests_error_text(inputs)
	if (locale === "tr") return tr_requests_error_text(inputs)
	if (locale === "zh") return zh_requests_error_text(inputs)
	if (locale === "ja") return ja_requests_error_text(inputs)
	return en_requests_error_text(inputs)
});
