/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Explore_Meta_Builds_DescriptionInputs */

const en_explore_meta_builds_description = /** @type {(inputs: Explore_Meta_Builds_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} BuildShare build for Sons of the Forest: bases, forts and treehouses made by the community. Free downloads.`);
	return /** @type {LocalizedString} */ (`${count__number} BuildShare builds for Sons of the Forest: bases, forts and treehouses made by the community. Free downloads.`)
	
};

const es_explore_meta_builds_description = /** @type {(inputs: Explore_Meta_Builds_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} build de BuildShare para Sons of the Forest: bases, fuertes y casas en el árbol creados por la comunidad. Descargas gratuitas.`);
	return /** @type {LocalizedString} */ (`${count__number} builds de BuildShare para Sons of the Forest: bases, fuertes y casas en el árbol creados por la comunidad. Descargas gratuitas.`)
	
};

const de_explore_meta_builds_description = /** @type {(inputs: Explore_Meta_Builds_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} BuildShare-Build für Sons of the Forest: Basen, Festungen und Baumhäuser aus der Community. Kostenlose Downloads.`);
	return /** @type {LocalizedString} */ (`${count__number} BuildShare-Builds für Sons of the Forest: Basen, Festungen und Baumhäuser aus der Community. Kostenlose Downloads.`)
	
};

const fr_explore_meta_builds_description = /** @type {(inputs: Explore_Meta_Builds_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} build BuildShare pour Sons of the Forest : bases, forts et cabanes créés par la communauté. Téléchargements gratuits.`);
	return /** @type {LocalizedString} */ (`${count__number} builds BuildShare pour Sons of the Forest : bases, forts et cabanes créés par la communauté. Téléchargements gratuits.`)
	
};

const it_explore_meta_builds_description = /** @type {(inputs: Explore_Meta_Builds_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} build BuildShare per Sons of the Forest: basi, forti e case sull’albero create dalla community. Download gratuiti.`);
	return /** @type {LocalizedString} */ (`${count__number} build BuildShare per Sons of the Forest: basi, forti e case sull’albero create dalla community. Download gratuiti.`)
	
};

const nl_explore_meta_builds_description = /** @type {(inputs: Explore_Meta_Builds_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} BuildShare-build voor Sons of the Forest: bases, forten en boomhutten gemaakt door de community. Gratis downloads.`);
	return /** @type {LocalizedString} */ (`${count__number} BuildShare-builds voor Sons of the Forest: bases, forten en boomhutten gemaakt door de community. Gratis downloads.`)
	
};

const pl_explore_meta_builds_description = /** @type {(inputs: Explore_Meta_Builds_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} build BuildShare do Sons of the Forest: bazy, forty i domki na drzewie stworzone przez społeczność. Darmowe pobieranie.`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} buildy BuildShare do Sons of the Forest: bazy, forty i domki na drzewie stworzone przez społeczność. Darmowe pobieranie.`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} buildów BuildShare do Sons of the Forest: bazy, forty i domki na drzewie stworzone przez społeczność. Darmowe pobieranie.`);
	return /** @type {LocalizedString} */ (`${count__number} builda BuildShare do Sons of the Forest: bazy, forty i domki na drzewie stworzone przez społeczność. Darmowe pobieranie.`)
	
};

const pt_explore_meta_builds_description = /** @type {(inputs: Explore_Meta_Builds_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} build do BuildShare para Sons of the Forest: bases, fortes e casas na árvore criadas pela comunidade. Downloads gratuitos.`);
	return /** @type {LocalizedString} */ (`${count__number} builds do BuildShare para Sons of the Forest: bases, fortes e casas na árvore criadas pela comunidade. Downloads gratuitos.`)
	
};

const ru_explore_meta_builds_description = /** @type {(inputs: Explore_Meta_Builds_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} постройка BuildShare для Sons of the Forest: базы, форты и домики на деревьях от сообщества. Бесплатная загрузка.`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} постройки BuildShare для Sons of the Forest: базы, форты и домики на деревьях от сообщества. Бесплатная загрузка.`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} построек BuildShare для Sons of the Forest: базы, форты и домики на деревьях от сообщества. Бесплатная загрузка.`);
	return /** @type {LocalizedString} */ (`${count__number} постройки BuildShare для Sons of the Forest: базы, форты и домики на деревьях от сообщества. Бесплатная загрузка.`)
	
};

const sv_explore_meta_builds_description = /** @type {(inputs: Explore_Meta_Builds_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} BuildShare-bygge till Sons of the Forest: baser, fort och trädkojor skapade av communityn. Gratis nedladdningar.`);
	return /** @type {LocalizedString} */ (`${count__number} BuildShare-byggen till Sons of the Forest: baser, fort och trädkojor skapade av communityn. Gratis nedladdningar.`)
	
};

const tr_explore_meta_builds_description = /** @type {(inputs: Explore_Meta_Builds_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Sons of the Forest için ${count__number} BuildShare yapısı: topluluğun yaptığı üsler, kaleler ve ağaç evler. Ücretsiz indirme.`);
	return /** @type {LocalizedString} */ (`Sons of the Forest için ${count__number} BuildShare yapısı: topluluğun yaptığı üsler, kaleler ve ağaç evler. Ücretsiz indirme.`)
	
};

const zh_explore_meta_builds_description = /** @type {(inputs: Explore_Meta_Builds_DescriptionInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`${count__number} 个 Sons of the Forest 的 BuildShare 建筑：社区制作的基地、堡垒和树屋，可免费下载。`)
};

const ja_explore_meta_builds_description = /** @type {(inputs: Explore_Meta_Builds_DescriptionInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`Sons of the Forest 向け BuildShare 建築 ${count__number} 件。コミュニティが作った拠点、砦、ツリーハウスを無料でダウンロードできます。`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{count__number} BuildShare build for Sons of the Forest: bases, forts and treehouses made by the community. Free downloads." |
* | * | "{count__number} BuildShare builds for Sons of the Forest: bases, forts and treehouses made by the community. Free downloads." |
*
* @param {Explore_Meta_Builds_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_meta_builds_description = /** @type {((inputs: Explore_Meta_Builds_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Meta_Builds_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_meta_builds_description(inputs)
	if (locale === "de") return de_explore_meta_builds_description(inputs)
	if (locale === "fr") return fr_explore_meta_builds_description(inputs)
	if (locale === "it") return it_explore_meta_builds_description(inputs)
	if (locale === "nl") return nl_explore_meta_builds_description(inputs)
	if (locale === "pl") return pl_explore_meta_builds_description(inputs)
	if (locale === "pt") return pt_explore_meta_builds_description(inputs)
	if (locale === "ru") return ru_explore_meta_builds_description(inputs)
	if (locale === "sv") return sv_explore_meta_builds_description(inputs)
	if (locale === "tr") return tr_explore_meta_builds_description(inputs)
	if (locale === "zh") return zh_explore_meta_builds_description(inputs)
	if (locale === "ja") return ja_explore_meta_builds_description(inputs)
	return en_explore_meta_builds_description(inputs)
});
