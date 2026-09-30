/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Dependency_Search_FailedInputs */

const en_upload_dependency_search_failed = /** @type {(inputs: Upload_Dependency_Search_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The search failed. Try again.`)
};

const es_upload_dependency_search_failed = /** @type {(inputs: Upload_Dependency_Search_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La búsqueda falló. Inténtalo de nuevo.`)
};

const de_upload_dependency_search_failed = /** @type {(inputs: Upload_Dependency_Search_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Suche ist fehlgeschlagen. Versuch es erneut.`)
};

const fr_upload_dependency_search_failed = /** @type {(inputs: Upload_Dependency_Search_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La recherche a échoué. Réessayez.`)
};

const it_upload_dependency_search_failed = /** @type {(inputs: Upload_Dependency_Search_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La ricerca non è riuscita. Riprova.`)
};

const nl_upload_dependency_search_failed = /** @type {(inputs: Upload_Dependency_Search_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zoeken is mislukt. Probeer opnieuw.`)
};

const pl_upload_dependency_search_failed = /** @type {(inputs: Upload_Dependency_Search_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wyszukiwanie się nie powiodło. Spróbuj ponownie.`)
};

const pt_upload_dependency_search_failed = /** @type {(inputs: Upload_Dependency_Search_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A busca falhou. Tente de novo.`)
};

const ru_upload_dependency_search_failed = /** @type {(inputs: Upload_Dependency_Search_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Поиск не удался. Попробуйте ещё раз.`)
};

const sv_upload_dependency_search_failed = /** @type {(inputs: Upload_Dependency_Search_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sökningen misslyckades. Försök igen.`)
};

const tr_upload_dependency_search_failed = /** @type {(inputs: Upload_Dependency_Search_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Arama başarısız. Tekrar dene.`)
};

const zh_upload_dependency_search_failed = /** @type {(inputs: Upload_Dependency_Search_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`搜索失败，请重试。`)
};

const ja_upload_dependency_search_failed = /** @type {(inputs: Upload_Dependency_Search_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`検索に失敗しました。もう一度お試しください。`)
};

/**
* | output |
* | --- |
* | "The search failed. Try again." |
*
* @param {Upload_Dependency_Search_FailedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_dependency_search_failed = /** @type {((inputs?: Upload_Dependency_Search_FailedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Dependency_Search_FailedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_dependency_search_failed(inputs)
	if (locale === "de") return de_upload_dependency_search_failed(inputs)
	if (locale === "fr") return fr_upload_dependency_search_failed(inputs)
	if (locale === "it") return it_upload_dependency_search_failed(inputs)
	if (locale === "nl") return nl_upload_dependency_search_failed(inputs)
	if (locale === "pl") return pl_upload_dependency_search_failed(inputs)
	if (locale === "pt") return pt_upload_dependency_search_failed(inputs)
	if (locale === "ru") return ru_upload_dependency_search_failed(inputs)
	if (locale === "sv") return sv_upload_dependency_search_failed(inputs)
	if (locale === "tr") return tr_upload_dependency_search_failed(inputs)
	if (locale === "zh") return zh_upload_dependency_search_failed(inputs)
	if (locale === "ja") return ja_upload_dependency_search_failed(inputs)
	return en_upload_dependency_search_failed(inputs)
});
