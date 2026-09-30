/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Requests_New_DescriptionInputs */

const en_requests_new_description = /** @type {(inputs: Requests_New_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Post a request for a Sons of the Forest mod and let creators pick it up.`)
};

const es_requests_new_description = /** @type {(inputs: Requests_New_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publica una petición de mod para Sons of the Forest y deja que los creadores la adopten.`)
};

const de_requests_new_description = /** @type {(inputs: Requests_New_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stelle einen Wunsch für einen Sons-of-the-Forest-Mod ein und lass Creators ihn übernehmen.`)
};

const fr_requests_new_description = /** @type {(inputs: Requests_New_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publiez une demande de mod pour Sons of the Forest et laissez les créateurs s’en emparer.`)
};

const it_requests_new_description = /** @type {(inputs: Requests_New_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pubblica una richiesta di mod per Sons of the Forest e lascia che i creator la prendano in carico.`)
};

const nl_requests_new_description = /** @type {(inputs: Requests_New_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plaats een verzoek voor een Sons of the Forest-mod en laat makers het oppakken.`)
};

const pl_requests_new_description = /** @type {(inputs: Requests_New_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dodaj prośbę o moda do Sons of the Forest i pozwól twórcom ją podjąć.`)
};

const pt_requests_new_description = /** @type {(inputs: Requests_New_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publique um pedido de mod para Sons of the Forest e deixe os criadores assumirem.`)
};

const ru_requests_new_description = /** @type {(inputs: Requests_New_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Опубликуйте запрос на мод для Sons of the Forest, и авторы смогут взяться за него.`)
};

const sv_requests_new_description = /** @type {(inputs: Requests_New_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lägg upp ett önskemål om en Sons of the Forest-mod och låt skapare ta sig an det.`)
};

const tr_requests_new_description = /** @type {(inputs: Requests_New_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sons of the Forest için bir mod isteği yayımlayın, geliştiriciler üstlensin.`)
};

const zh_requests_new_description = /** @type {(inputs: Requests_New_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`发布 Sons of the Forest 的模组请求，让创作者来接手。`)
};

const ja_requests_new_description = /** @type {(inputs: Requests_New_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sons of the Forest の MOD リクエストを投稿して、クリエイターに引き受けてもらいましょう。`)
};

/**
* | output |
* | --- |
* | "Post a request for a Sons of the Forest mod and let creators pick it up." |
*
* @param {Requests_New_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const requests_new_description = /** @type {((inputs?: Requests_New_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Requests_New_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_requests_new_description(inputs)
	if (locale === "de") return de_requests_new_description(inputs)
	if (locale === "fr") return fr_requests_new_description(inputs)
	if (locale === "it") return it_requests_new_description(inputs)
	if (locale === "nl") return nl_requests_new_description(inputs)
	if (locale === "pl") return pl_requests_new_description(inputs)
	if (locale === "pt") return pt_requests_new_description(inputs)
	if (locale === "ru") return ru_requests_new_description(inputs)
	if (locale === "sv") return sv_requests_new_description(inputs)
	if (locale === "tr") return tr_requests_new_description(inputs)
	if (locale === "zh") return zh_requests_new_description(inputs)
	if (locale === "ja") return ja_requests_new_description(inputs)
	return en_requests_new_description(inputs)
});
