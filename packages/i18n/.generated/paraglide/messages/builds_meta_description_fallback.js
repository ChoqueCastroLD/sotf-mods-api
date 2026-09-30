/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown>, author: NonNullable<unknown>, count: NonNullable<unknown>, downloads: NonNullable<unknown> }} Builds_Meta_Description_FallbackInputs */

const en_builds_meta_description_fallback = /** @type {(inputs: Builds_Meta_Description_FallbackInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name}: a Sons of the Forest build by ${i?.author} for BuildShare. ${i?.downloads} download, free, with import steps.`);
	return /** @type {LocalizedString} */ (`${i?.name}: a Sons of the Forest build by ${i?.author} for BuildShare. ${i?.downloads} downloads, free, with import steps.`)
	
};

const es_builds_meta_description_fallback = /** @type {(inputs: Builds_Meta_Description_FallbackInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name}: una build de Sons of the Forest de ${i?.author} para BuildShare. ${i?.downloads} descarga, gratis y con pasos para importarla.`);
	return /** @type {LocalizedString} */ (`${i?.name}: una build de Sons of the Forest de ${i?.author} para BuildShare. ${i?.downloads} descargas, gratis y con pasos para importarla.`)
	
};

const de_builds_meta_description_fallback = /** @type {(inputs: Builds_Meta_Description_FallbackInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name}: ein Sons-of-the-Forest-Build von ${i?.author} für BuildShare. ${i?.downloads} Download, kostenlos, mit Importanleitung.`);
	return /** @type {LocalizedString} */ (`${i?.name}: ein Sons-of-the-Forest-Build von ${i?.author} für BuildShare. ${i?.downloads} Downloads, kostenlos, mit Importanleitung.`)
	
};

const fr_builds_meta_description_fallback = /** @type {(inputs: Builds_Meta_Description_FallbackInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} : une build Sons of the Forest de ${i?.author} pour BuildShare. ${i?.downloads} téléchargement, gratuite, avec les étapes d’import.`);
	return /** @type {LocalizedString} */ (`${i?.name} : une build Sons of the Forest de ${i?.author} pour BuildShare. ${i?.downloads} téléchargements, gratuite, avec les étapes d’import.`)
	
};

const it_builds_meta_description_fallback = /** @type {(inputs: Builds_Meta_Description_FallbackInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name}: una build di Sons of the Forest di ${i?.author} per BuildShare. ${i?.downloads} download, gratis, con i passaggi per importarla.`);
	return /** @type {LocalizedString} */ (`${i?.name}: una build di Sons of the Forest di ${i?.author} per BuildShare. ${i?.downloads} download, gratis, con i passaggi per importarla.`)
	
};

const nl_builds_meta_description_fallback = /** @type {(inputs: Builds_Meta_Description_FallbackInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name}: een Sons of the Forest-build van ${i?.author} voor BuildShare. ${i?.downloads} download, gratis, met importstappen.`);
	return /** @type {LocalizedString} */ (`${i?.name}: een Sons of the Forest-build van ${i?.author} voor BuildShare. ${i?.downloads} downloads, gratis, met importstappen.`)
	
};

const pl_builds_meta_description_fallback = /** @type {(inputs: Builds_Meta_Description_FallbackInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name}: build do Sons of the Forest od ${i?.author} dla BuildShare. ${i?.downloads} pobranie, za darmo, z instrukcją importu.`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${i?.name}: build do Sons of the Forest od ${i?.author} dla BuildShare. ${i?.downloads} pobrania, za darmo, z instrukcją importu.`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${i?.name}: build do Sons of the Forest od ${i?.author} dla BuildShare. ${i?.downloads} pobrań, za darmo, z instrukcją importu.`);
	return /** @type {LocalizedString} */ (`${i?.name}: build do Sons of the Forest od ${i?.author} dla BuildShare. ${i?.downloads} pobrania, za darmo, z instrukcją importu.`)
	
};

const pt_builds_meta_description_fallback = /** @type {(inputs: Builds_Meta_Description_FallbackInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name}: uma build de Sons of the Forest de ${i?.author} para o BuildShare. ${i?.downloads} download, grátis, com passos para importar.`);
	return /** @type {LocalizedString} */ (`${i?.name}: uma build de Sons of the Forest de ${i?.author} para o BuildShare. ${i?.downloads} downloads, grátis, com passos para importar.`)
	
};

const ru_builds_meta_description_fallback = /** @type {(inputs: Builds_Meta_Description_FallbackInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name}: постройка для Sons of the Forest от ${i?.author} для BuildShare. ${i?.downloads} скачивание, бесплатно, с инструкцией по импорту.`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${i?.name}: постройка для Sons of the Forest от ${i?.author} для BuildShare. ${i?.downloads} скачивания, бесплатно, с инструкцией по импорту.`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${i?.name}: постройка для Sons of the Forest от ${i?.author} для BuildShare. ${i?.downloads} скачиваний, бесплатно, с инструкцией по импорту.`);
	return /** @type {LocalizedString} */ (`${i?.name}: постройка для Sons of the Forest от ${i?.author} для BuildShare. ${i?.downloads} скачивания, бесплатно, с инструкцией по импорту.`)
	
};

const sv_builds_meta_description_fallback = /** @type {(inputs: Builds_Meta_Description_FallbackInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name}: ett Sons of the Forest-bygge av ${i?.author} för BuildShare. ${i?.downloads} nedladdning, gratis, med importsteg.`);
	return /** @type {LocalizedString} */ (`${i?.name}: ett Sons of the Forest-bygge av ${i?.author} för BuildShare. ${i?.downloads} nedladdningar, gratis, med importsteg.`)
	
};

const tr_builds_meta_description_fallback = /** @type {(inputs: Builds_Meta_Description_FallbackInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name}: ${i?.author} tarafından BuildShare için hazırlanmış bir Sons of the Forest yapısı. ${i?.downloads} indirme, ücretsiz ve içe aktarma adımlarıyla.`);
	return /** @type {LocalizedString} */ (`${i?.name}: ${i?.author} tarafından BuildShare için hazırlanmış bir Sons of the Forest yapısı. ${i?.downloads} indirme, ücretsiz ve içe aktarma adımlarıyla.`)
	
};

const zh_builds_meta_description_fallback = /** @type {(inputs: Builds_Meta_Description_FallbackInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});return /** @type {LocalizedString} */ (`${i?.name}：${i?.author} 为 BuildShare 制作的《森林之子》建筑。${i?.downloads} 次下载，免费，附导入步骤。`)
};

const ja_builds_meta_description_fallback = /** @type {(inputs: Builds_Meta_Description_FallbackInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});return /** @type {LocalizedString} */ (`${i?.name}：${i?.author} による BuildShare 用の Sons of the Forest 建築。${i?.downloads} ダウンロード、無料、インポート手順つき。`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{name}: a Sons of the Forest build by {author} for BuildShare. {downloads} download, free, with import steps." |
* | * | "{name}: a Sons of the Forest build by {author} for BuildShare. {downloads} downloads, free, with import steps." |
*
* @param {Builds_Meta_Description_FallbackInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const builds_meta_description_fallback = /** @type {((inputs: Builds_Meta_Description_FallbackInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_Meta_Description_FallbackInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_builds_meta_description_fallback(inputs)
	if (locale === "de") return de_builds_meta_description_fallback(inputs)
	if (locale === "fr") return fr_builds_meta_description_fallback(inputs)
	if (locale === "it") return it_builds_meta_description_fallback(inputs)
	if (locale === "nl") return nl_builds_meta_description_fallback(inputs)
	if (locale === "pl") return pl_builds_meta_description_fallback(inputs)
	if (locale === "pt") return pt_builds_meta_description_fallback(inputs)
	if (locale === "ru") return ru_builds_meta_description_fallback(inputs)
	if (locale === "sv") return sv_builds_meta_description_fallback(inputs)
	if (locale === "tr") return tr_builds_meta_description_fallback(inputs)
	if (locale === "zh") return zh_builds_meta_description_fallback(inputs)
	if (locale === "ja") return ja_builds_meta_description_fallback(inputs)
	return en_builds_meta_description_fallback(inputs)
});
