/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown>, tag: NonNullable<unknown> }} Explore_Meta_Tag_DescriptionInputs */

const en_explore_meta_tag_description = /** @type {(inputs: Explore_Meta_Tag_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} Sons of the Forest mod or build tagged “${i?.tag}”, with compatibility, ratings and direct downloads.`);
	return /** @type {LocalizedString} */ (`${count__number} Sons of the Forest mods and builds tagged “${i?.tag}”, with compatibility, ratings and direct downloads.`)
	
};

const es_explore_meta_tag_description = /** @type {(inputs: Explore_Meta_Tag_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} mod o build de Sons of the Forest con la etiqueta «${i?.tag}», con compatibilidad, valoraciones y descarga directa.`);
	return /** @type {LocalizedString} */ (`${count__number} mods y builds de Sons of the Forest con la etiqueta «${i?.tag}», con compatibilidad, valoraciones y descarga directa.`)
	
};

const de_explore_meta_tag_description = /** @type {(inputs: Explore_Meta_Tag_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} Sons-of-the-Forest-Mod oder -Build mit dem Tag „${i?.tag}“, mit Kompatibilität, Bewertungen und Direkt-Download.`);
	return /** @type {LocalizedString} */ (`${count__number} Sons-of-the-Forest-Mods und -Builds mit dem Tag „${i?.tag}“, mit Kompatibilität, Bewertungen und Direkt-Download.`)
	
};

const fr_explore_meta_tag_description = /** @type {(inputs: Explore_Meta_Tag_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} mod ou build Sons of the Forest avec le tag « ${i?.tag} », avec compatibilité, notes et téléchargement direct.`);
	return /** @type {LocalizedString} */ (`${count__number} mods et builds Sons of the Forest avec le tag « ${i?.tag} », avec compatibilité, notes et téléchargement direct.`)
	
};

const it_explore_meta_tag_description = /** @type {(inputs: Explore_Meta_Tag_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} mod o build di Sons of the Forest con il tag «${i?.tag}», con compatibilità, valutazioni e download diretto.`);
	return /** @type {LocalizedString} */ (`${count__number} mod e build di Sons of the Forest con il tag «${i?.tag}», con compatibilità, valutazioni e download diretto.`)
	
};

const nl_explore_meta_tag_description = /** @type {(inputs: Explore_Meta_Tag_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} Sons of the Forest-mod of -build met de tag ‘${i?.tag}’, met compatibiliteit, beoordelingen en directe download.`);
	return /** @type {LocalizedString} */ (`${count__number} Sons of the Forest-mods en -builds met de tag ‘${i?.tag}’, met compatibiliteit, beoordelingen en directe download.`)
	
};

const pl_explore_meta_tag_description = /** @type {(inputs: Explore_Meta_Tag_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} mod lub build do Sons of the Forest z tagiem „${i?.tag}”, ze zgodnością, ocenami i bezpośrednim pobieraniem.`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} mody i buildy do Sons of the Forest z tagiem „${i?.tag}”, ze zgodnością, ocenami i bezpośrednim pobieraniem.`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} modów i buildów do Sons of the Forest z tagiem „${i?.tag}”, ze zgodnością, ocenami i bezpośrednim pobieraniem.`);
	return /** @type {LocalizedString} */ (`${count__number} moda lub buildu do Sons of the Forest z tagiem „${i?.tag}”, ze zgodnością, ocenami i bezpośrednim pobieraniem.`)
	
};

const pt_explore_meta_tag_description = /** @type {(inputs: Explore_Meta_Tag_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} mod ou build de Sons of the Forest com a tag “${i?.tag}”, com compatibilidade, avaliações e download direto.`);
	return /** @type {LocalizedString} */ (`${count__number} mods e builds de Sons of the Forest com a tag “${i?.tag}”, com compatibilidade, avaliações e download direto.`)
	
};

const ru_explore_meta_tag_description = /** @type {(inputs: Explore_Meta_Tag_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} мод или постройка для Sons of the Forest с тегом «${i?.tag}»: совместимость, оценки и прямые загрузки.`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} мода и постройки для Sons of the Forest с тегом «${i?.tag}»: совместимость, оценки и прямые загрузки.`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} модов и построек для Sons of the Forest с тегом «${i?.tag}»: совместимость, оценки и прямые загрузки.`);
	return /** @type {LocalizedString} */ (`${count__number} мода и постройки для Sons of the Forest с тегом «${i?.tag}»: совместимость, оценки и прямые загрузки.`)
	
};

const sv_explore_meta_tag_description = /** @type {(inputs: Explore_Meta_Tag_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} modd eller bygge till Sons of the Forest taggat ”${i?.tag}”, med kompatibilitet, betyg och direkt nedladdning.`);
	return /** @type {LocalizedString} */ (`${count__number} moddar och byggen till Sons of the Forest taggade ”${i?.tag}”, med kompatibilitet, betyg och direkt nedladdning.`)
	
};

const tr_explore_meta_tag_description = /** @type {(inputs: Explore_Meta_Tag_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`“${i?.tag}” etiketli ${count__number} Sons of the Forest modu veya yapısı; uyumluluk, puanlar ve doğrudan indirme ile.`);
	return /** @type {LocalizedString} */ (`“${i?.tag}” etiketli ${count__number} Sons of the Forest modu ve yapısı; uyumluluk, puanlar ve doğrudan indirme ile.`)
	
};

const zh_explore_meta_tag_description = /** @type {(inputs: Explore_Meta_Tag_DescriptionInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`${count__number} 个带有“${i?.tag}”标签的 Sons of the Forest 模组和建筑，附兼容性、评分和直接下载。`)
};

const ja_explore_meta_tag_description = /** @type {(inputs: Explore_Meta_Tag_DescriptionInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`タグ「${i?.tag}」が付いた Sons of the Forest の MOD と建築 ${count__number} 件。互換性、評価、直接ダウンロード付き。`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{count__number} Sons of the Forest mod or build tagged “{tag}”, with compatibility, ratings and direct downloads." |
* | * | "{count__number} Sons of the Forest mods and builds tagged “{tag}”, with compatibility, ratings and direct downloads." |
*
* @param {Explore_Meta_Tag_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_meta_tag_description = /** @type {((inputs: Explore_Meta_Tag_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Meta_Tag_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_meta_tag_description(inputs)
	if (locale === "de") return de_explore_meta_tag_description(inputs)
	if (locale === "fr") return fr_explore_meta_tag_description(inputs)
	if (locale === "it") return it_explore_meta_tag_description(inputs)
	if (locale === "nl") return nl_explore_meta_tag_description(inputs)
	if (locale === "pl") return pl_explore_meta_tag_description(inputs)
	if (locale === "pt") return pt_explore_meta_tag_description(inputs)
	if (locale === "ru") return ru_explore_meta_tag_description(inputs)
	if (locale === "sv") return sv_explore_meta_tag_description(inputs)
	if (locale === "tr") return tr_explore_meta_tag_description(inputs)
	if (locale === "zh") return zh_explore_meta_tag_description(inputs)
	if (locale === "ja") return ja_explore_meta_tag_description(inputs)
	return en_explore_meta_tag_description(inputs)
});
