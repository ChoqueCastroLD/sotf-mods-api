/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Builds_Banner_Pending_TextInputs */

const en_builds_banner_pending_text = /** @type {(inputs: Builds_Banner_Pending_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A ranger will check this build soon. Until then it stays out of listings and search.`)
};

const es_builds_banner_pending_text = /** @type {(inputs: Builds_Banner_Pending_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un ranger revisará esta build pronto. Hasta entonces no aparece en listados ni búsquedas.`)
};

const de_builds_banner_pending_text = /** @type {(inputs: Builds_Banner_Pending_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ein Ranger prüft diesen Build bald. Bis dahin erscheint er nicht in Listen und in der Suche.`)
};

const fr_builds_banner_pending_text = /** @type {(inputs: Builds_Banner_Pending_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un ranger va bientôt vérifier cette build. D’ici là, elle n’apparaît ni dans les listes ni dans la recherche.`)
};

const it_builds_banner_pending_text = /** @type {(inputs: Builds_Banner_Pending_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un ranger controllerà presto questa build. Fino ad allora non compare negli elenchi né nella ricerca.`)
};

const nl_builds_banner_pending_text = /** @type {(inputs: Builds_Banner_Pending_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Een ranger bekijkt deze build binnenkort. Tot die tijd staat hij niet in overzichten en zoekresultaten.`)
};

const pl_builds_banner_pending_text = /** @type {(inputs: Builds_Banner_Pending_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ranger wkrótce sprawdzi ten build. Do tego czasu nie pojawia się na listach ani w wyszukiwarce.`)
};

const pt_builds_banner_pending_text = /** @type {(inputs: Builds_Banner_Pending_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Um ranger vai revisar esta build em breve. Até lá, ela não aparece em listas nem na busca.`)
};

const ru_builds_banner_pending_text = /** @type {(inputs: Builds_Banner_Pending_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Рейнджер скоро проверит эту постройку. До этого её нет в списках и в поиске.`)
};

const sv_builds_banner_pending_text = /** @type {(inputs: Builds_Banner_Pending_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En ranger granskar bygget snart. Tills dess syns det inte i listor och sökningar.`)
};

const tr_builds_banner_pending_text = /** @type {(inputs: Builds_Banner_Pending_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bir korucu bu yapıyı yakında inceleyecek. O zamana kadar listelerde ve aramada görünmez.`)
};

const zh_builds_banner_pending_text = /** @type {(inputs: Builds_Banner_Pending_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`护林员很快会审核此建筑。在此之前，它不会出现在列表和搜索中。`)
};

const ja_builds_banner_pending_text = /** @type {(inputs: Builds_Banner_Pending_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`まもなくレンジャーがこの建築を確認します。それまでは一覧や検索に表示されません。`)
};

/**
* | output |
* | --- |
* | "A ranger will check this build soon. Until then it stays out of listings and search." |
*
* @param {Builds_Banner_Pending_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const builds_banner_pending_text = /** @type {((inputs?: Builds_Banner_Pending_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_Banner_Pending_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_builds_banner_pending_text(inputs)
	if (locale === "de") return de_builds_banner_pending_text(inputs)
	if (locale === "fr") return fr_builds_banner_pending_text(inputs)
	if (locale === "it") return it_builds_banner_pending_text(inputs)
	if (locale === "nl") return nl_builds_banner_pending_text(inputs)
	if (locale === "pl") return pl_builds_banner_pending_text(inputs)
	if (locale === "pt") return pt_builds_banner_pending_text(inputs)
	if (locale === "ru") return ru_builds_banner_pending_text(inputs)
	if (locale === "sv") return sv_builds_banner_pending_text(inputs)
	if (locale === "tr") return tr_builds_banner_pending_text(inputs)
	if (locale === "zh") return zh_builds_banner_pending_text(inputs)
	if (locale === "ja") return ja_builds_banner_pending_text(inputs)
	return en_builds_banner_pending_text(inputs)
});
