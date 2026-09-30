/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown>, kind: NonNullable<unknown>, author: NonNullable<unknown>, count: NonNullable<unknown>, downloads: NonNullable<unknown> }} Mod_Meta_Description_FactsInputs */

const en_mod_meta_description_facts = /** @type {(inputs: Mod_Meta_Description_FactsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	if (i?.kind === "library" && count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} is a Sons of the Forest library by ${i?.author} for RedLoader. ${i?.downloads} download, free and direct.`);
	if (i?.kind === "library") return /** @type {LocalizedString} */ (`${i?.name} is a Sons of the Forest library by ${i?.author} for RedLoader. ${i?.downloads} downloads, free and direct.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} is a Sons of the Forest mod by ${i?.author} for RedLoader. ${i?.downloads} download, free and direct.`);
	return /** @type {LocalizedString} */ (`${i?.name} is a Sons of the Forest mod by ${i?.author} for RedLoader. ${i?.downloads} downloads, free and direct.`)
	
};

const es_mod_meta_description_facts = /** @type {(inputs: Mod_Meta_Description_FactsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	if (i?.kind === "library" && count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} es una librería de Sons of the Forest creado por ${i?.author} para RedLoader. ${i?.downloads} descarga, gratis y directas.`);
	if (i?.kind === "library") return /** @type {LocalizedString} */ (`${i?.name} es una librería de Sons of the Forest creado por ${i?.author} para RedLoader. ${i?.downloads} descargas, gratis y directas.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} es un mod de Sons of the Forest creado por ${i?.author} para RedLoader. ${i?.downloads} descarga, gratis y directas.`);
	return /** @type {LocalizedString} */ (`${i?.name} es un mod de Sons of the Forest creado por ${i?.author} para RedLoader. ${i?.downloads} descargas, gratis y directas.`)
	
};

const de_mod_meta_description_facts = /** @type {(inputs: Mod_Meta_Description_FactsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	if (i?.kind === "library" && count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} ist eine Bibliothek für Sons of the Forest von ${i?.author}, für RedLoader. ${i?.downloads} Download, kostenlos und direkt.`);
	if (i?.kind === "library") return /** @type {LocalizedString} */ (`${i?.name} ist eine Bibliothek für Sons of the Forest von ${i?.author}, für RedLoader. ${i?.downloads} Downloads, kostenlos und direkt.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} ist ein Mod für Sons of the Forest von ${i?.author}, für RedLoader. ${i?.downloads} Download, kostenlos und direkt.`);
	return /** @type {LocalizedString} */ (`${i?.name} ist ein Mod für Sons of the Forest von ${i?.author}, für RedLoader. ${i?.downloads} Downloads, kostenlos und direkt.`)
	
};

const fr_mod_meta_description_facts = /** @type {(inputs: Mod_Meta_Description_FactsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	if (i?.kind === "library" && count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} est une bibliothèque Sons of the Forest de ${i?.author} pour RedLoader. ${i?.downloads} téléchargement, gratuits et directs.`);
	if (i?.kind === "library") return /** @type {LocalizedString} */ (`${i?.name} est une bibliothèque Sons of the Forest de ${i?.author} pour RedLoader. ${i?.downloads} téléchargements, gratuits et directs.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} est un mod Sons of the Forest de ${i?.author} pour RedLoader. ${i?.downloads} téléchargement, gratuits et directs.`);
	return /** @type {LocalizedString} */ (`${i?.name} est un mod Sons of the Forest de ${i?.author} pour RedLoader. ${i?.downloads} téléchargements, gratuits et directs.`)
	
};

const it_mod_meta_description_facts = /** @type {(inputs: Mod_Meta_Description_FactsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	if (i?.kind === "library" && count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} è una libreria di Sons of the Forest creata da ${i?.author} per RedLoader. ${i?.downloads} download, gratis e diretti.`);
	if (i?.kind === "library") return /** @type {LocalizedString} */ (`${i?.name} è una libreria di Sons of the Forest creata da ${i?.author} per RedLoader. ${i?.downloads} download, gratis e diretti.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} è una mod di Sons of the Forest creata da ${i?.author} per RedLoader. ${i?.downloads} download, gratis e diretti.`);
	return /** @type {LocalizedString} */ (`${i?.name} è una mod di Sons of the Forest creata da ${i?.author} per RedLoader. ${i?.downloads} download, gratis e diretti.`)
	
};

const nl_mod_meta_description_facts = /** @type {(inputs: Mod_Meta_Description_FactsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	if (i?.kind === "library" && count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} is een bibliotheek voor Sons of the Forest van ${i?.author}, voor RedLoader. ${i?.downloads} download, gratis en direct.`);
	if (i?.kind === "library") return /** @type {LocalizedString} */ (`${i?.name} is een bibliotheek voor Sons of the Forest van ${i?.author}, voor RedLoader. ${i?.downloads} downloads, gratis en direct.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} is een mod voor Sons of the Forest van ${i?.author}, voor RedLoader. ${i?.downloads} download, gratis en direct.`);
	return /** @type {LocalizedString} */ (`${i?.name} is een mod voor Sons of the Forest van ${i?.author}, voor RedLoader. ${i?.downloads} downloads, gratis en direct.`)
	
};

const pl_mod_meta_description_facts = /** @type {(inputs: Mod_Meta_Description_FactsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	if (i?.kind === "library" && count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} to biblioteka do Sons of the Forest od ${i?.author} dla RedLoadera. ${i?.downloads} pobranie, za darmo i bezpośrednio.`);
	if (i?.kind === "library" && count__plural === "few") return /** @type {LocalizedString} */ (`${i?.name} to biblioteka do Sons of the Forest od ${i?.author} dla RedLoadera. ${i?.downloads} pobrania, za darmo i bezpośrednio.`);
	if (i?.kind === "library" && count__plural === "many") return /** @type {LocalizedString} */ (`${i?.name} to biblioteka do Sons of the Forest od ${i?.author} dla RedLoadera. ${i?.downloads} pobrań, za darmo i bezpośrednio.`);
	if (i?.kind === "library") return /** @type {LocalizedString} */ (`${i?.name} to biblioteka do Sons of the Forest od ${i?.author} dla RedLoadera. ${i?.downloads} pobrania, za darmo i bezpośrednio.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} to mod do Sons of the Forest od ${i?.author} dla RedLoadera. ${i?.downloads} pobranie, za darmo i bezpośrednio.`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${i?.name} to mod do Sons of the Forest od ${i?.author} dla RedLoadera. ${i?.downloads} pobrania, za darmo i bezpośrednio.`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${i?.name} to mod do Sons of the Forest od ${i?.author} dla RedLoadera. ${i?.downloads} pobrań, za darmo i bezpośrednio.`);
	return /** @type {LocalizedString} */ (`${i?.name} to mod do Sons of the Forest od ${i?.author} dla RedLoadera. ${i?.downloads} pobrania, za darmo i bezpośrednio.`)
	
};

const pt_mod_meta_description_facts = /** @type {(inputs: Mod_Meta_Description_FactsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	if (i?.kind === "library" && count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} é uma biblioteca de Sons of the Forest feito por ${i?.author} para o RedLoader. ${i?.downloads} download, grátis e direto.`);
	if (i?.kind === "library") return /** @type {LocalizedString} */ (`${i?.name} é uma biblioteca de Sons of the Forest feito por ${i?.author} para o RedLoader. ${i?.downloads} downloads, grátis e direto.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} é um mod de Sons of the Forest feito por ${i?.author} para o RedLoader. ${i?.downloads} download, grátis e direto.`);
	return /** @type {LocalizedString} */ (`${i?.name} é um mod de Sons of the Forest feito por ${i?.author} para o RedLoader. ${i?.downloads} downloads, grátis e direto.`)
	
};

const ru_mod_meta_description_facts = /** @type {(inputs: Mod_Meta_Description_FactsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	if (i?.kind === "library" && count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} — библиотека для Sons of the Forest от ${i?.author} для RedLoader. ${i?.downloads} загрузка, бесплатно и напрямую.`);
	if (i?.kind === "library" && count__plural === "few") return /** @type {LocalizedString} */ (`${i?.name} — библиотека для Sons of the Forest от ${i?.author} для RedLoader. ${i?.downloads} загрузки, бесплатно и напрямую.`);
	if (i?.kind === "library" && count__plural === "many") return /** @type {LocalizedString} */ (`${i?.name} — библиотека для Sons of the Forest от ${i?.author} для RedLoader. ${i?.downloads} загрузок, бесплатно и напрямую.`);
	if (i?.kind === "library") return /** @type {LocalizedString} */ (`${i?.name} — библиотека для Sons of the Forest от ${i?.author} для RedLoader. ${i?.downloads} загрузки, бесплатно и напрямую.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} — мод для Sons of the Forest от ${i?.author} для RedLoader. ${i?.downloads} загрузка, бесплатно и напрямую.`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${i?.name} — мод для Sons of the Forest от ${i?.author} для RedLoader. ${i?.downloads} загрузки, бесплатно и напрямую.`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${i?.name} — мод для Sons of the Forest от ${i?.author} для RedLoader. ${i?.downloads} загрузок, бесплатно и напрямую.`);
	return /** @type {LocalizedString} */ (`${i?.name} — мод для Sons of the Forest от ${i?.author} для RedLoader. ${i?.downloads} загрузки, бесплатно и напрямую.`)
	
};

const sv_mod_meta_description_facts = /** @type {(inputs: Mod_Meta_Description_FactsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	if (i?.kind === "library" && count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} är ett bibliotek till Sons of the Forest av ${i?.author} för RedLoader. ${i?.downloads} nedladdning, gratis och direkt.`);
	if (i?.kind === "library") return /** @type {LocalizedString} */ (`${i?.name} är ett bibliotek till Sons of the Forest av ${i?.author} för RedLoader. ${i?.downloads} nedladdningar, gratis och direkt.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} är en mod till Sons of the Forest av ${i?.author} för RedLoader. ${i?.downloads} nedladdning, gratis och direkt.`);
	return /** @type {LocalizedString} */ (`${i?.name} är en mod till Sons of the Forest av ${i?.author} för RedLoader. ${i?.downloads} nedladdningar, gratis och direkt.`)
	
};

const tr_mod_meta_description_facts = /** @type {(inputs: Mod_Meta_Description_FactsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	if (i?.kind === "library" && count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name}, ${i?.author} tarafından RedLoader için yapılmış bir Sons of the Forest kütüphanesi. ${i?.downloads} indirme, ücretsiz ve doğrudan.`);
	if (i?.kind === "library") return /** @type {LocalizedString} */ (`${i?.name}, ${i?.author} tarafından RedLoader için yapılmış bir Sons of the Forest kütüphanesi. ${i?.downloads} indirme, ücretsiz ve doğrudan.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name}, ${i?.author} tarafından RedLoader için yapılmış bir Sons of the Forest modu. ${i?.downloads} indirme, ücretsiz ve doğrudan.`);
	return /** @type {LocalizedString} */ (`${i?.name}, ${i?.author} tarafından RedLoader için yapılmış bir Sons of the Forest modu. ${i?.downloads} indirme, ücretsiz ve doğrudan.`)
	
};

const zh_mod_meta_description_facts = /** @type {(inputs: Mod_Meta_Description_FactsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("zh", i?.count, {});
	if (i?.kind === "library") return /** @type {LocalizedString} */ (`${i?.name} 是 ${i?.author} 为 RedLoader 制作的 Sons of the Forest 前置库。已下载 ${i?.downloads} 次，免费直链下载。`);
	return /** @type {LocalizedString} */ (`${i?.name} 是 ${i?.author} 为 RedLoader 制作的 Sons of the Forest 模组。已下载 ${i?.downloads} 次，免费直链下载。`)
	
};

const ja_mod_meta_description_facts = /** @type {(inputs: Mod_Meta_Description_FactsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ja", i?.count, {});
	if (i?.kind === "library") return /** @type {LocalizedString} */ (`${i?.name} は ${i?.author} が RedLoader 向けに作った Sons of the Forest ライブラリ です。${i?.downloads} ダウンロード、無料で直接ダウンロードできます。`);
	return /** @type {LocalizedString} */ (`${i?.name} は ${i?.author} が RedLoader 向けに作った Sons of the Forest MOD です。${i?.downloads} ダウンロード、無料で直接ダウンロードできます。`)
	
};

/**
* | kind | count__plural | output |
* | --- | --- | --- |
* | "library" | "one" | "{name} is a Sons of the Forest library by {author} for RedLoader. {downloads} download, free and direct." |
* | "library" | * | "{name} is a Sons of the Forest library by {author} for RedLoader. {downloads} downloads, free and direct." |
* | * | "one" | "{name} is a Sons of the Forest mod by {author} for RedLoader. {downloads} download, free and direct." |
* | * | * | "{name} is a Sons of the Forest mod by {author} for RedLoader. {downloads} downloads, free and direct." |
*
* @param {Mod_Meta_Description_FactsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_meta_description_facts = /** @type {((inputs: Mod_Meta_Description_FactsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Meta_Description_FactsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_meta_description_facts(inputs)
	if (locale === "de") return de_mod_meta_description_facts(inputs)
	if (locale === "fr") return fr_mod_meta_description_facts(inputs)
	if (locale === "it") return it_mod_meta_description_facts(inputs)
	if (locale === "nl") return nl_mod_meta_description_facts(inputs)
	if (locale === "pl") return pl_mod_meta_description_facts(inputs)
	if (locale === "pt") return pt_mod_meta_description_facts(inputs)
	if (locale === "ru") return ru_mod_meta_description_facts(inputs)
	if (locale === "sv") return sv_mod_meta_description_facts(inputs)
	if (locale === "tr") return tr_mod_meta_description_facts(inputs)
	if (locale === "zh") return zh_mod_meta_description_facts(inputs)
	if (locale === "ja") return ja_mod_meta_description_facts(inputs)
	return en_mod_meta_description_facts(inputs)
});
