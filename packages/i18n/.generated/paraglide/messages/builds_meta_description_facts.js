/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown>, author: NonNullable<unknown>, pieceCount: NonNullable<unknown>, pieces: NonNullable<unknown>, count: NonNullable<unknown>, downloads: NonNullable<unknown> }} Builds_Meta_Description_FactsInputs */

const en_builds_meta_description_facts = /** @type {(inputs: Builds_Meta_Description_FactsInputs) => LocalizedString} */ (i) => {const pieceCount__plural = registry.plural("en", i?.pieceCount, {});
	const count__plural = registry.plural("en", i?.count, {});
	if (pieceCount__plural === "one" && count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name}: a Sons of the Forest build by ${i?.author} for BuildShare, ${i?.pieces} piece. ${i?.downloads} download, free, with import steps.`);
	if (pieceCount__plural === "one") return /** @type {LocalizedString} */ (`${i?.name}: a Sons of the Forest build by ${i?.author} for BuildShare, ${i?.pieces} piece. ${i?.downloads} downloads, free, with import steps.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name}: a Sons of the Forest build by ${i?.author} for BuildShare, ${i?.pieces} pieces. ${i?.downloads} download, free, with import steps.`);
	return /** @type {LocalizedString} */ (`${i?.name}: a Sons of the Forest build by ${i?.author} for BuildShare, ${i?.pieces} pieces. ${i?.downloads} downloads, free, with import steps.`)
	
};

const es_builds_meta_description_facts = /** @type {(inputs: Builds_Meta_Description_FactsInputs) => LocalizedString} */ (i) => {const pieceCount__plural = registry.plural("es", i?.pieceCount, {});
	const count__plural = registry.plural("es", i?.count, {});
	if (pieceCount__plural === "one" && count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name}: una build de Sons of the Forest de ${i?.author} para BuildShare, ${i?.pieces} pieza. ${i?.downloads} descarga, gratis y con pasos para importarla.`);
	if (pieceCount__plural === "one") return /** @type {LocalizedString} */ (`${i?.name}: una build de Sons of the Forest de ${i?.author} para BuildShare, ${i?.pieces} pieza. ${i?.downloads} descargas, gratis y con pasos para importarla.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name}: una build de Sons of the Forest de ${i?.author} para BuildShare, ${i?.pieces} piezas. ${i?.downloads} descarga, gratis y con pasos para importarla.`);
	return /** @type {LocalizedString} */ (`${i?.name}: una build de Sons of the Forest de ${i?.author} para BuildShare, ${i?.pieces} piezas. ${i?.downloads} descargas, gratis y con pasos para importarla.`)
	
};

const de_builds_meta_description_facts = /** @type {(inputs: Builds_Meta_Description_FactsInputs) => LocalizedString} */ (i) => {const pieceCount__plural = registry.plural("de", i?.pieceCount, {});
	const count__plural = registry.plural("de", i?.count, {});
	if (pieceCount__plural === "one" && count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name}: ein Sons-of-the-Forest-Build von ${i?.author} für BuildShare, ${i?.pieces} Teil. ${i?.downloads} Download, kostenlos, mit Importanleitung.`);
	if (pieceCount__plural === "one") return /** @type {LocalizedString} */ (`${i?.name}: ein Sons-of-the-Forest-Build von ${i?.author} für BuildShare, ${i?.pieces} Teil. ${i?.downloads} Downloads, kostenlos, mit Importanleitung.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name}: ein Sons-of-the-Forest-Build von ${i?.author} für BuildShare, ${i?.pieces} Teile. ${i?.downloads} Download, kostenlos, mit Importanleitung.`);
	return /** @type {LocalizedString} */ (`${i?.name}: ein Sons-of-the-Forest-Build von ${i?.author} für BuildShare, ${i?.pieces} Teile. ${i?.downloads} Downloads, kostenlos, mit Importanleitung.`)
	
};

const fr_builds_meta_description_facts = /** @type {(inputs: Builds_Meta_Description_FactsInputs) => LocalizedString} */ (i) => {const pieceCount__plural = registry.plural("fr", i?.pieceCount, {});
	const count__plural = registry.plural("fr", i?.count, {});
	if (pieceCount__plural === "one" && count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} : une build Sons of the Forest de ${i?.author} pour BuildShare, ${i?.pieces} pièce. ${i?.downloads} téléchargement, gratuite, avec les étapes d’import.`);
	if (pieceCount__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} : une build Sons of the Forest de ${i?.author} pour BuildShare, ${i?.pieces} pièce. ${i?.downloads} téléchargements, gratuite, avec les étapes d’import.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} : une build Sons of the Forest de ${i?.author} pour BuildShare, ${i?.pieces} pièces. ${i?.downloads} téléchargement, gratuite, avec les étapes d’import.`);
	return /** @type {LocalizedString} */ (`${i?.name} : une build Sons of the Forest de ${i?.author} pour BuildShare, ${i?.pieces} pièces. ${i?.downloads} téléchargements, gratuite, avec les étapes d’import.`)
	
};

const it_builds_meta_description_facts = /** @type {(inputs: Builds_Meta_Description_FactsInputs) => LocalizedString} */ (i) => {const pieceCount__plural = registry.plural("it", i?.pieceCount, {});
	const count__plural = registry.plural("it", i?.count, {});
	if (pieceCount__plural === "one" && count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name}: una build di Sons of the Forest di ${i?.author} per BuildShare, ${i?.pieces} pezzo. ${i?.downloads} download, gratis, con i passaggi per importarla.`);
	if (pieceCount__plural === "one") return /** @type {LocalizedString} */ (`${i?.name}: una build di Sons of the Forest di ${i?.author} per BuildShare, ${i?.pieces} pezzo. ${i?.downloads} download, gratis, con i passaggi per importarla.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name}: una build di Sons of the Forest di ${i?.author} per BuildShare, ${i?.pieces} pezzi. ${i?.downloads} download, gratis, con i passaggi per importarla.`);
	return /** @type {LocalizedString} */ (`${i?.name}: una build di Sons of the Forest di ${i?.author} per BuildShare, ${i?.pieces} pezzi. ${i?.downloads} download, gratis, con i passaggi per importarla.`)
	
};

const nl_builds_meta_description_facts = /** @type {(inputs: Builds_Meta_Description_FactsInputs) => LocalizedString} */ (i) => {const pieceCount__plural = registry.plural("nl", i?.pieceCount, {});
	const count__plural = registry.plural("nl", i?.count, {});
	if (pieceCount__plural === "one" && count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name}: een Sons of the Forest-build van ${i?.author} voor BuildShare, ${i?.pieces} onderdeel. ${i?.downloads} download, gratis, met importstappen.`);
	if (pieceCount__plural === "one") return /** @type {LocalizedString} */ (`${i?.name}: een Sons of the Forest-build van ${i?.author} voor BuildShare, ${i?.pieces} onderdeel. ${i?.downloads} downloads, gratis, met importstappen.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name}: een Sons of the Forest-build van ${i?.author} voor BuildShare, ${i?.pieces} onderdelen. ${i?.downloads} download, gratis, met importstappen.`);
	return /** @type {LocalizedString} */ (`${i?.name}: een Sons of the Forest-build van ${i?.author} voor BuildShare, ${i?.pieces} onderdelen. ${i?.downloads} downloads, gratis, met importstappen.`)
	
};

const pl_builds_meta_description_facts = /** @type {(inputs: Builds_Meta_Description_FactsInputs) => LocalizedString} */ (i) => {const pieceCount__plural = registry.plural("pl", i?.pieceCount, {});
	const count__plural = registry.plural("pl", i?.count, {});
	if (pieceCount__plural === "one" && count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name}: build do Sons of the Forest od ${i?.author} dla BuildShare, ${i?.pieces} element. ${i?.downloads} pobranie, za darmo, z instrukcją importu.`);
	if (pieceCount__plural === "one" && count__plural === "few") return /** @type {LocalizedString} */ (`${i?.name}: build do Sons of the Forest od ${i?.author} dla BuildShare, ${i?.pieces} element. ${i?.downloads} pobrania, za darmo, z instrukcją importu.`);
	if (pieceCount__plural === "one" && count__plural === "many") return /** @type {LocalizedString} */ (`${i?.name}: build do Sons of the Forest od ${i?.author} dla BuildShare, ${i?.pieces} element. ${i?.downloads} pobrań, za darmo, z instrukcją importu.`);
	if (pieceCount__plural === "one") return /** @type {LocalizedString} */ (`${i?.name}: build do Sons of the Forest od ${i?.author} dla BuildShare, ${i?.pieces} element. ${i?.downloads} pobrania, za darmo, z instrukcją importu.`);
	if (pieceCount__plural === "few" && count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name}: build do Sons of the Forest od ${i?.author} dla BuildShare, ${i?.pieces} elementy. ${i?.downloads} pobranie, za darmo, z instrukcją importu.`);
	if (pieceCount__plural === "few" && count__plural === "few") return /** @type {LocalizedString} */ (`${i?.name}: build do Sons of the Forest od ${i?.author} dla BuildShare, ${i?.pieces} elementy. ${i?.downloads} pobrania, za darmo, z instrukcją importu.`);
	if (pieceCount__plural === "few" && count__plural === "many") return /** @type {LocalizedString} */ (`${i?.name}: build do Sons of the Forest od ${i?.author} dla BuildShare, ${i?.pieces} elementy. ${i?.downloads} pobrań, za darmo, z instrukcją importu.`);
	if (pieceCount__plural === "few") return /** @type {LocalizedString} */ (`${i?.name}: build do Sons of the Forest od ${i?.author} dla BuildShare, ${i?.pieces} elementy. ${i?.downloads} pobrania, za darmo, z instrukcją importu.`);
	if (pieceCount__plural === "many" && count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name}: build do Sons of the Forest od ${i?.author} dla BuildShare, ${i?.pieces} elementów. ${i?.downloads} pobranie, za darmo, z instrukcją importu.`);
	if (pieceCount__plural === "many" && count__plural === "few") return /** @type {LocalizedString} */ (`${i?.name}: build do Sons of the Forest od ${i?.author} dla BuildShare, ${i?.pieces} elementów. ${i?.downloads} pobrania, za darmo, z instrukcją importu.`);
	if (pieceCount__plural === "many" && count__plural === "many") return /** @type {LocalizedString} */ (`${i?.name}: build do Sons of the Forest od ${i?.author} dla BuildShare, ${i?.pieces} elementów. ${i?.downloads} pobrań, za darmo, z instrukcją importu.`);
	if (pieceCount__plural === "many") return /** @type {LocalizedString} */ (`${i?.name}: build do Sons of the Forest od ${i?.author} dla BuildShare, ${i?.pieces} elementów. ${i?.downloads} pobrania, za darmo, z instrukcją importu.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name}: build do Sons of the Forest od ${i?.author} dla BuildShare, ${i?.pieces} elementu. ${i?.downloads} pobranie, za darmo, z instrukcją importu.`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${i?.name}: build do Sons of the Forest od ${i?.author} dla BuildShare, ${i?.pieces} elementu. ${i?.downloads} pobrania, za darmo, z instrukcją importu.`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${i?.name}: build do Sons of the Forest od ${i?.author} dla BuildShare, ${i?.pieces} elementu. ${i?.downloads} pobrań, za darmo, z instrukcją importu.`);
	return /** @type {LocalizedString} */ (`${i?.name}: build do Sons of the Forest od ${i?.author} dla BuildShare, ${i?.pieces} elementu. ${i?.downloads} pobrania, za darmo, z instrukcją importu.`)
	
};

const pt_builds_meta_description_facts = /** @type {(inputs: Builds_Meta_Description_FactsInputs) => LocalizedString} */ (i) => {const pieceCount__plural = registry.plural("pt", i?.pieceCount, {});
	const count__plural = registry.plural("pt", i?.count, {});
	if (pieceCount__plural === "one" && count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name}: uma build de Sons of the Forest de ${i?.author} para o BuildShare, ${i?.pieces} peça. ${i?.downloads} download, grátis, com passos para importar.`);
	if (pieceCount__plural === "one") return /** @type {LocalizedString} */ (`${i?.name}: uma build de Sons of the Forest de ${i?.author} para o BuildShare, ${i?.pieces} peça. ${i?.downloads} downloads, grátis, com passos para importar.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name}: uma build de Sons of the Forest de ${i?.author} para o BuildShare, ${i?.pieces} peças. ${i?.downloads} download, grátis, com passos para importar.`);
	return /** @type {LocalizedString} */ (`${i?.name}: uma build de Sons of the Forest de ${i?.author} para o BuildShare, ${i?.pieces} peças. ${i?.downloads} downloads, grátis, com passos para importar.`)
	
};

const ru_builds_meta_description_facts = /** @type {(inputs: Builds_Meta_Description_FactsInputs) => LocalizedString} */ (i) => {const pieceCount__plural = registry.plural("ru", i?.pieceCount, {});
	const count__plural = registry.plural("ru", i?.count, {});
	if (pieceCount__plural === "one" && count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name}: постройка для Sons of the Forest от ${i?.author} для BuildShare, ${i?.pieces} деталь. ${i?.downloads} скачивание, бесплатно, с инструкцией по импорту.`);
	if (pieceCount__plural === "one" && count__plural === "few") return /** @type {LocalizedString} */ (`${i?.name}: постройка для Sons of the Forest от ${i?.author} для BuildShare, ${i?.pieces} деталь. ${i?.downloads} скачивания, бесплатно, с инструкцией по импорту.`);
	if (pieceCount__plural === "one" && count__plural === "many") return /** @type {LocalizedString} */ (`${i?.name}: постройка для Sons of the Forest от ${i?.author} для BuildShare, ${i?.pieces} деталь. ${i?.downloads} скачиваний, бесплатно, с инструкцией по импорту.`);
	if (pieceCount__plural === "one") return /** @type {LocalizedString} */ (`${i?.name}: постройка для Sons of the Forest от ${i?.author} для BuildShare, ${i?.pieces} деталь. ${i?.downloads} скачивания, бесплатно, с инструкцией по импорту.`);
	if (pieceCount__plural === "few" && count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name}: постройка для Sons of the Forest от ${i?.author} для BuildShare, ${i?.pieces} детали. ${i?.downloads} скачивание, бесплатно, с инструкцией по импорту.`);
	if (pieceCount__plural === "few" && count__plural === "few") return /** @type {LocalizedString} */ (`${i?.name}: постройка для Sons of the Forest от ${i?.author} для BuildShare, ${i?.pieces} детали. ${i?.downloads} скачивания, бесплатно, с инструкцией по импорту.`);
	if (pieceCount__plural === "few" && count__plural === "many") return /** @type {LocalizedString} */ (`${i?.name}: постройка для Sons of the Forest от ${i?.author} для BuildShare, ${i?.pieces} детали. ${i?.downloads} скачиваний, бесплатно, с инструкцией по импорту.`);
	if (pieceCount__plural === "few") return /** @type {LocalizedString} */ (`${i?.name}: постройка для Sons of the Forest от ${i?.author} для BuildShare, ${i?.pieces} детали. ${i?.downloads} скачивания, бесплатно, с инструкцией по импорту.`);
	if (pieceCount__plural === "many" && count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name}: постройка для Sons of the Forest от ${i?.author} для BuildShare, ${i?.pieces} деталей. ${i?.downloads} скачивание, бесплатно, с инструкцией по импорту.`);
	if (pieceCount__plural === "many" && count__plural === "few") return /** @type {LocalizedString} */ (`${i?.name}: постройка для Sons of the Forest от ${i?.author} для BuildShare, ${i?.pieces} деталей. ${i?.downloads} скачивания, бесплатно, с инструкцией по импорту.`);
	if (pieceCount__plural === "many" && count__plural === "many") return /** @type {LocalizedString} */ (`${i?.name}: постройка для Sons of the Forest от ${i?.author} для BuildShare, ${i?.pieces} деталей. ${i?.downloads} скачиваний, бесплатно, с инструкцией по импорту.`);
	if (pieceCount__plural === "many") return /** @type {LocalizedString} */ (`${i?.name}: постройка для Sons of the Forest от ${i?.author} для BuildShare, ${i?.pieces} деталей. ${i?.downloads} скачивания, бесплатно, с инструкцией по импорту.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name}: постройка для Sons of the Forest от ${i?.author} для BuildShare, ${i?.pieces} детали. ${i?.downloads} скачивание, бесплатно, с инструкцией по импорту.`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${i?.name}: постройка для Sons of the Forest от ${i?.author} для BuildShare, ${i?.pieces} детали. ${i?.downloads} скачивания, бесплатно, с инструкцией по импорту.`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${i?.name}: постройка для Sons of the Forest от ${i?.author} для BuildShare, ${i?.pieces} детали. ${i?.downloads} скачиваний, бесплатно, с инструкцией по импорту.`);
	return /** @type {LocalizedString} */ (`${i?.name}: постройка для Sons of the Forest от ${i?.author} для BuildShare, ${i?.pieces} детали. ${i?.downloads} скачивания, бесплатно, с инструкцией по импорту.`)
	
};

const sv_builds_meta_description_facts = /** @type {(inputs: Builds_Meta_Description_FactsInputs) => LocalizedString} */ (i) => {const pieceCount__plural = registry.plural("sv", i?.pieceCount, {});
	const count__plural = registry.plural("sv", i?.count, {});
	if (pieceCount__plural === "one" && count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name}: ett Sons of the Forest-bygge av ${i?.author} för BuildShare, ${i?.pieces} del. ${i?.downloads} nedladdning, gratis, med importsteg.`);
	if (pieceCount__plural === "one") return /** @type {LocalizedString} */ (`${i?.name}: ett Sons of the Forest-bygge av ${i?.author} för BuildShare, ${i?.pieces} del. ${i?.downloads} nedladdningar, gratis, med importsteg.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name}: ett Sons of the Forest-bygge av ${i?.author} för BuildShare, ${i?.pieces} delar. ${i?.downloads} nedladdning, gratis, med importsteg.`);
	return /** @type {LocalizedString} */ (`${i?.name}: ett Sons of the Forest-bygge av ${i?.author} för BuildShare, ${i?.pieces} delar. ${i?.downloads} nedladdningar, gratis, med importsteg.`)
	
};

const tr_builds_meta_description_facts = /** @type {(inputs: Builds_Meta_Description_FactsInputs) => LocalizedString} */ (i) => {const pieceCount__plural = registry.plural("tr", i?.pieceCount, {});
	const count__plural = registry.plural("tr", i?.count, {});
	if (pieceCount__plural === "one" && count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name}: ${i?.author} tarafından BuildShare için hazırlanmış bir Sons of the Forest yapısı, ${i?.pieces} parça. ${i?.downloads} indirme, ücretsiz ve içe aktarma adımlarıyla.`);
	if (pieceCount__plural === "one") return /** @type {LocalizedString} */ (`${i?.name}: ${i?.author} tarafından BuildShare için hazırlanmış bir Sons of the Forest yapısı, ${i?.pieces} parça. ${i?.downloads} indirme, ücretsiz ve içe aktarma adımlarıyla.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name}: ${i?.author} tarafından BuildShare için hazırlanmış bir Sons of the Forest yapısı, ${i?.pieces} parça. ${i?.downloads} indirme, ücretsiz ve içe aktarma adımlarıyla.`);
	return /** @type {LocalizedString} */ (`${i?.name}: ${i?.author} tarafından BuildShare için hazırlanmış bir Sons of the Forest yapısı, ${i?.pieces} parça. ${i?.downloads} indirme, ücretsiz ve içe aktarma adımlarıyla.`)
	
};

const zh_builds_meta_description_facts = /** @type {(inputs: Builds_Meta_Description_FactsInputs) => LocalizedString} */ (i) => {
	const pieceCount__plural = registry.plural("zh", i?.pieceCount, {});
	const count__plural = registry.plural("zh", i?.count, {});return /** @type {LocalizedString} */ (`${i?.name}：${i?.author} 为 BuildShare 制作的《森林之子》建筑，${i?.pieces} 个部件。${i?.downloads} 次下载，免费，附导入步骤。`)
};

const ja_builds_meta_description_facts = /** @type {(inputs: Builds_Meta_Description_FactsInputs) => LocalizedString} */ (i) => {
	const pieceCount__plural = registry.plural("ja", i?.pieceCount, {});
	const count__plural = registry.plural("ja", i?.count, {});return /** @type {LocalizedString} */ (`${i?.name}：${i?.author} による BuildShare 用の Sons of the Forest 建築、${i?.pieces} パーツ。${i?.downloads} ダウンロード、無料、インポート手順つき。`)
};

/**
* | pieceCount__plural | count__plural | output |
* | --- | --- | --- |
* | "one" | "one" | "{name}: a Sons of the Forest build by {author} for BuildShare, {pieces} piece. {downloads} download, free, with import steps." |
* | "one" | * | "{name}: a Sons of the Forest build by {author} for BuildShare, {pieces} piece. {downloads} downloads, free, with import steps." |
* | * | "one" | "{name}: a Sons of the Forest build by {author} for BuildShare, {pieces} pieces. {downloads} download, free, with import steps." |
* | * | * | "{name}: a Sons of the Forest build by {author} for BuildShare, {pieces} pieces. {downloads} downloads, free, with import steps." |
*
* @param {Builds_Meta_Description_FactsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const builds_meta_description_facts = /** @type {((inputs: Builds_Meta_Description_FactsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_Meta_Description_FactsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_builds_meta_description_facts(inputs)
	if (locale === "de") return de_builds_meta_description_facts(inputs)
	if (locale === "fr") return fr_builds_meta_description_facts(inputs)
	if (locale === "it") return it_builds_meta_description_facts(inputs)
	if (locale === "nl") return nl_builds_meta_description_facts(inputs)
	if (locale === "pl") return pl_builds_meta_description_facts(inputs)
	if (locale === "pt") return pt_builds_meta_description_facts(inputs)
	if (locale === "ru") return ru_builds_meta_description_facts(inputs)
	if (locale === "sv") return sv_builds_meta_description_facts(inputs)
	if (locale === "tr") return tr_builds_meta_description_facts(inputs)
	if (locale === "zh") return zh_builds_meta_description_facts(inputs)
	if (locale === "ja") return ja_builds_meta_description_facts(inputs)
	return en_builds_meta_description_facts(inputs)
});
