/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Search_Error_TextInputs */

const en_explore_search_error_text = /** @type {(inputs: Explore_Search_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Search is out of reach right now. Try again in a moment.`)
};

const es_explore_search_error_text = /** @type {(inputs: Explore_Search_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La búsqueda no está disponible ahora mismo. Vuelve a intentarlo en un momento.`)
};

const de_explore_search_error_text = /** @type {(inputs: Explore_Search_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Suche ist gerade nicht erreichbar. Versuch es gleich noch einmal.`)
};

const fr_explore_search_error_text = /** @type {(inputs: Explore_Search_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La recherche est injoignable pour le moment. Réessayez dans un instant.`)
};

const it_explore_search_error_text = /** @type {(inputs: Explore_Search_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La ricerca non è raggiungibile al momento. Riprova tra poco.`)
};

const nl_explore_search_error_text = /** @type {(inputs: Explore_Search_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zoeken is nu niet bereikbaar. Probeer het zo meteen opnieuw.`)
};

const pl_explore_search_error_text = /** @type {(inputs: Explore_Search_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wyszukiwanie jest teraz niedostępne. Spróbuj ponownie za chwilę.`)
};

const pt_explore_search_error_text = /** @type {(inputs: Explore_Search_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A pesquisa está fora do ar agora. Tente de novo em instantes.`)
};

const ru_explore_search_error_text = /** @type {(inputs: Explore_Search_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Поиск сейчас недоступен. Попробуйте через минуту.`)
};

const sv_explore_search_error_text = /** @type {(inputs: Explore_Search_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sökningen går inte att nå just nu. Försök igen om en stund.`)
};

const tr_explore_search_error_text = /** @type {(inputs: Explore_Search_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Arama şu anda kullanılamıyor. Birazdan yeniden dene.`)
};

const zh_explore_search_error_text = /** @type {(inputs: Explore_Search_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`搜索暂时无法使用，请稍后再试。`)
};

const ja_explore_search_error_text = /** @type {(inputs: Explore_Search_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`現在、検索を利用できません。しばらくしてからお試しください。`)
};

/**
* | output |
* | --- |
* | "Search is out of reach right now. Try again in a moment." |
*
* @param {Explore_Search_Error_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_search_error_text = /** @type {((inputs?: Explore_Search_Error_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Search_Error_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_search_error_text(inputs)
	if (locale === "de") return de_explore_search_error_text(inputs)
	if (locale === "fr") return fr_explore_search_error_text(inputs)
	if (locale === "it") return it_explore_search_error_text(inputs)
	if (locale === "nl") return nl_explore_search_error_text(inputs)
	if (locale === "pl") return pl_explore_search_error_text(inputs)
	if (locale === "pt") return pt_explore_search_error_text(inputs)
	if (locale === "ru") return ru_explore_search_error_text(inputs)
	if (locale === "sv") return sv_explore_search_error_text(inputs)
	if (locale === "tr") return tr_explore_search_error_text(inputs)
	if (locale === "zh") return zh_explore_search_error_text(inputs)
	if (locale === "ja") return ja_explore_search_error_text(inputs)
	return en_explore_search_error_text(inputs)
});
