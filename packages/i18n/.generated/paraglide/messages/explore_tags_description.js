/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Tags_DescriptionInputs */

const en_explore_tags_description = /** @type {(inputs: Explore_Tags_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Find Sons of the Forest mods by what they touch: inventory, building tools, enemies, graphics and more.`)
};

const es_explore_tags_description = /** @type {(inputs: Explore_Tags_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Encuentra mods de Sons of the Forest según lo que tocan: inventario, herramientas de construcción, enemigos, gráficos y más.`)
};

const de_explore_tags_description = /** @type {(inputs: Explore_Tags_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Finde Sons-of-the-Forest-Mods danach, was sie verändern: Inventar, Bauwerkzeuge, Gegner, Grafik und mehr.`)
};

const fr_explore_tags_description = /** @type {(inputs: Explore_Tags_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trouvez des mods Sons of the Forest selon ce qu’ils modifient : inventaire, outils de construction, ennemis, graphismes et plus.`)
};

const it_explore_tags_description = /** @type {(inputs: Explore_Tags_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trova mod di Sons of the Forest in base a ciò che toccano: inventario, strumenti di costruzione, nemici, grafica e altro.`)
};

const nl_explore_tags_description = /** @type {(inputs: Explore_Tags_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vind Sons of the Forest-mods op basis van wat ze aanpassen: inventaris, bouwgereedschap, vijanden, graphics en meer.`)
};

const pl_explore_tags_description = /** @type {(inputs: Explore_Tags_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Znajdź mody do Sons of the Forest według tego, co zmieniają: ekwipunek, narzędzia budowania, wrogów, grafikę i nie tylko.`)
};

const pt_explore_tags_description = /** @type {(inputs: Explore_Tags_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Encontre mods de Sons of the Forest pelo que eles mudam: inventário, ferramentas de construção, inimigos, gráficos e mais.`)
};

const ru_explore_tags_description = /** @type {(inputs: Explore_Tags_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ищите моды для Sons of the Forest по тому, что они меняют: инвентарь, инструменты строительства, враги, графика и не только.`)
};

const sv_explore_tags_description = /** @type {(inputs: Explore_Tags_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hitta moddar till Sons of the Forest efter vad de påverkar: inventarie, byggverktyg, fiender, grafik med mera.`)
};

const tr_explore_tags_description = /** @type {(inputs: Explore_Tags_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sons of the Forest modlarını neyi değiştirdiklerine göre bul: envanter, inşa araçları, düşmanlar, grafikler ve daha fazlası.`)
};

const zh_explore_tags_description = /** @type {(inputs: Explore_Tags_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`按修改内容查找 Sons of the Forest 模组：物品栏、建造工具、敌人、画面等。`)
};

const ja_explore_tags_description = /** @type {(inputs: Explore_Tags_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`インベントリ、建築ツール、敵、グラフィックなど、変更する内容から Sons of the Forest の MOD を探せます。`)
};

/**
* | output |
* | --- |
* | "Find Sons of the Forest mods by what they touch: inventory, building tools, enemies, graphics and more." |
*
* @param {Explore_Tags_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_tags_description = /** @type {((inputs?: Explore_Tags_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Tags_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_tags_description(inputs)
	if (locale === "de") return de_explore_tags_description(inputs)
	if (locale === "fr") return fr_explore_tags_description(inputs)
	if (locale === "it") return it_explore_tags_description(inputs)
	if (locale === "nl") return nl_explore_tags_description(inputs)
	if (locale === "pl") return pl_explore_tags_description(inputs)
	if (locale === "pt") return pt_explore_tags_description(inputs)
	if (locale === "ru") return ru_explore_tags_description(inputs)
	if (locale === "sv") return sv_explore_tags_description(inputs)
	if (locale === "tr") return tr_explore_tags_description(inputs)
	if (locale === "zh") return zh_explore_tags_description(inputs)
	if (locale === "ja") return ja_explore_tags_description(inputs)
	return en_explore_tags_description(inputs)
});
