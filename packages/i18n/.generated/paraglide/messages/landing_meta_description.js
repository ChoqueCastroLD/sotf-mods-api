/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown>, mods: NonNullable<unknown> }} Landing_Meta_DescriptionInputs */

const en_landing_meta_description = /** @type {(inputs: Landing_Meta_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Download ${i?.mods} Sons of the Forest mod and builds for RedLoader. Free direct downloads with ratings and comments from the community.`);
	return /** @type {LocalizedString} */ (`Download ${i?.mods} Sons of the Forest mods and builds for RedLoader. Free direct downloads with ratings and comments from the community.`)
	
};

const es_landing_meta_description = /** @type {(inputs: Landing_Meta_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Descarga ${i?.mods} mod de Sons of the Forest y builds para RedLoader. Descargas directas y gratuitas, con valoraciones y comentarios de la comunidad.`);
	return /** @type {LocalizedString} */ (`Descarga ${i?.mods} mods de Sons of the Forest y builds para RedLoader. Descargas directas y gratuitas, con valoraciones y comentarios de la comunidad.`)
	
};

const de_landing_meta_description = /** @type {(inputs: Landing_Meta_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Lade ${i?.mods} Sons-of-the-Forest-Mod herunter und Builds für RedLoader. Kostenlose Direkt-Downloads mit Bewertungen und Kommentaren der Community.`);
	return /** @type {LocalizedString} */ (`Lade ${i?.mods} Sons-of-the-Forest-Mods herunter und Builds für RedLoader. Kostenlose Direkt-Downloads mit Bewertungen und Kommentaren der Community.`)
	
};

const fr_landing_meta_description = /** @type {(inputs: Landing_Meta_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Téléchargez ${i?.mods} mod Sons of the Forest et des builds pour RedLoader. Téléchargements directs et gratuits, avec les notes et les commentaires de la communauté.`);
	return /** @type {LocalizedString} */ (`Téléchargez ${i?.mods} mods Sons of the Forest et des builds pour RedLoader. Téléchargements directs et gratuits, avec les notes et les commentaires de la communauté.`)
	
};

const it_landing_meta_description = /** @type {(inputs: Landing_Meta_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Scarica ${i?.mods} mod di Sons of the Forest e build per RedLoader. Download diretti e gratuiti, con valutazioni e commenti della community.`);
	return /** @type {LocalizedString} */ (`Scarica ${i?.mods} mod di Sons of the Forest e build per RedLoader. Download diretti e gratuiti, con valutazioni e commenti della community.`)
	
};

const nl_landing_meta_description = /** @type {(inputs: Landing_Meta_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Download ${i?.mods} Sons of the Forest-mod en builds voor RedLoader. Gratis directe downloads, met beoordelingen en reacties van de community.`);
	return /** @type {LocalizedString} */ (`Download ${i?.mods} Sons of the Forest-mods en builds voor RedLoader. Gratis directe downloads, met beoordelingen en reacties van de community.`)
	
};

const pl_landing_meta_description = /** @type {(inputs: Landing_Meta_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Pobierz ${i?.mods} mod do Sons of the Forest oraz buildy do RedLoadera. Bezpłatne, bezpośrednie pobieranie z ocenami i komentarzami społeczności.`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`Pobierz ${i?.mods} mody do Sons of the Forest oraz buildy do RedLoadera. Bezpłatne, bezpośrednie pobieranie z ocenami i komentarzami społeczności.`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`Pobierz ${i?.mods} modów do Sons of the Forest oraz buildy do RedLoadera. Bezpłatne, bezpośrednie pobieranie z ocenami i komentarzami społeczności.`);
	return /** @type {LocalizedString} */ (`Pobierz ${i?.mods} moda do Sons of the Forest oraz buildy do RedLoadera. Bezpłatne, bezpośrednie pobieranie z ocenami i komentarzami społeczności.`)
	
};

const pt_landing_meta_description = /** @type {(inputs: Landing_Meta_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Baixe ${i?.mods} mod de Sons of the Forest e builds para o RedLoader. Downloads diretos e gratuitos, com avaliações e comentários da comunidade.`);
	return /** @type {LocalizedString} */ (`Baixe ${i?.mods} mods de Sons of the Forest e builds para o RedLoader. Downloads diretos e gratuitos, com avaliações e comentários da comunidade.`)
	
};

const ru_landing_meta_description = /** @type {(inputs: Landing_Meta_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Скачайте ${i?.mods} мод для Sons of the Forest и билды для RedLoader. Бесплатные прямые загрузки с оценками и комментариями сообщества.`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`Скачайте ${i?.mods} мода для Sons of the Forest и билды для RedLoader. Бесплатные прямые загрузки с оценками и комментариями сообщества.`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`Скачайте ${i?.mods} модов для Sons of the Forest и билды для RedLoader. Бесплатные прямые загрузки с оценками и комментариями сообщества.`);
	return /** @type {LocalizedString} */ (`Скачайте ${i?.mods} мода для Sons of the Forest и билды для RedLoader. Бесплатные прямые загрузки с оценками и комментариями сообщества.`)
	
};

const sv_landing_meta_description = /** @type {(inputs: Landing_Meta_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Ladda ner ${i?.mods} Sons of the Forest-mod och builds för RedLoader. Gratis direkta nedladdningar med omdömen och kommentarer från communityn.`);
	return /** @type {LocalizedString} */ (`Ladda ner ${i?.mods} Sons of the Forest-mods och builds för RedLoader. Gratis direkta nedladdningar med omdömen och kommentarer från communityn.`)
	
};

const tr_landing_meta_description = /** @type {(inputs: Landing_Meta_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.mods} Sons of the Forest modunu indirin ve RedLoader için buildler. Topluluğun puanları ve yorumlarıyla ücretsiz, doğrudan indirmeler.`);
	return /** @type {LocalizedString} */ (`${i?.mods} Sons of the Forest modunu indirin ve RedLoader için buildler. Topluluğun puanları ve yorumlarıyla ücretsiz, doğrudan indirmeler.`)
	
};

const zh_landing_meta_description = /** @type {(inputs: Landing_Meta_DescriptionInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});return /** @type {LocalizedString} */ (`下载 ${i?.mods} 个适用于 RedLoader 的《森林之子》模组和建筑。免费直接下载，附有社区的评分和评论。`)
};

const ja_landing_meta_description = /** @type {(inputs: Landing_Meta_DescriptionInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});return /** @type {LocalizedString} */ (`Sons of the Forest 向けMOD ${i?.mods} 件と RedLoader 用の建築を無料で直接ダウンロード。コミュニティの評価とコメント付きです。`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "Download {mods} Sons of the Forest mod and builds for RedLoader. Free direct downloads with ratings and comments from the community." |
* | * | "Download {mods} Sons of the Forest mods and builds for RedLoader. Free direct downloads with ratings and comments from the community." |
*
* @param {Landing_Meta_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const landing_meta_description = /** @type {((inputs: Landing_Meta_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Meta_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_landing_meta_description(inputs)
	if (locale === "de") return de_landing_meta_description(inputs)
	if (locale === "fr") return fr_landing_meta_description(inputs)
	if (locale === "it") return it_landing_meta_description(inputs)
	if (locale === "nl") return nl_landing_meta_description(inputs)
	if (locale === "pl") return pl_landing_meta_description(inputs)
	if (locale === "pt") return pt_landing_meta_description(inputs)
	if (locale === "ru") return ru_landing_meta_description(inputs)
	if (locale === "sv") return sv_landing_meta_description(inputs)
	if (locale === "tr") return tr_landing_meta_description(inputs)
	if (locale === "zh") return zh_landing_meta_description(inputs)
	if (locale === "ja") return ja_landing_meta_description(inputs)
	return en_landing_meta_description(inputs)
});
