/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Requests_Error_TitleInputs */

const en_requests_error_title = /** @type {(inputs: Requests_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Could not load the requests`)
};

const es_requests_error_title = /** @type {(inputs: Requests_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se pudieron cargar las peticiones`)
};

const de_requests_error_title = /** @type {(inputs: Requests_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wünsche konnten nicht geladen werden`)
};

const fr_requests_error_title = /** @type {(inputs: Requests_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossible de charger les demandes`)
};

const it_requests_error_title = /** @type {(inputs: Requests_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossibile caricare le richieste`)
};

const nl_requests_error_title = /** @type {(inputs: Requests_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De verzoeken konden niet worden geladen`)
};

const pl_requests_error_title = /** @type {(inputs: Requests_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się wczytać próśb`)
};

const pt_requests_error_title = /** @type {(inputs: Requests_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi possível carregar os pedidos`)
};

const ru_requests_error_title = /** @type {(inputs: Requests_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не удалось загрузить запросы`)
};

const sv_requests_error_title = /** @type {(inputs: Requests_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Det gick inte att läsa in önskemålen`)
};

const tr_requests_error_title = /** @type {(inputs: Requests_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İstekler yüklenemedi`)
};

const zh_requests_error_title = /** @type {(inputs: Requests_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无法加载请求`)
};

const ja_requests_error_title = /** @type {(inputs: Requests_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`リクエストを読み込めませんでした`)
};

/**
* | output |
* | --- |
* | "Could not load the requests" |
*
* @param {Requests_Error_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const requests_error_title = /** @type {((inputs?: Requests_Error_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Requests_Error_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_requests_error_title(inputs)
	if (locale === "de") return de_requests_error_title(inputs)
	if (locale === "fr") return fr_requests_error_title(inputs)
	if (locale === "it") return it_requests_error_title(inputs)
	if (locale === "nl") return nl_requests_error_title(inputs)
	if (locale === "pl") return pl_requests_error_title(inputs)
	if (locale === "pt") return pt_requests_error_title(inputs)
	if (locale === "ru") return ru_requests_error_title(inputs)
	if (locale === "sv") return sv_requests_error_title(inputs)
	if (locale === "tr") return tr_requests_error_title(inputs)
	if (locale === "zh") return zh_requests_error_title(inputs)
	if (locale === "ja") return ja_requests_error_title(inputs)
	return en_requests_error_title(inputs)
});
