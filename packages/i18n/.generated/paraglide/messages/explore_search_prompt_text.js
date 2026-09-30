/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Search_Prompt_TextInputs */

const en_explore_search_prompt_text = /** @type {(inputs: Explore_Search_Prompt_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Search mods, builds, kits, creators and guides by name, author or manifest ID.`)
};

const es_explore_search_prompt_text = /** @type {(inputs: Explore_Search_Prompt_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Busca mods, builds, kits, creadores y guías por nombre, autor o ID del manifiesto.`)
};

const de_explore_search_prompt_text = /** @type {(inputs: Explore_Search_Prompt_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Suche Mods, Builds, Kits, Creator und Anleitungen nach Name, Autor oder Manifest-ID.`)
};

const fr_explore_search_prompt_text = /** @type {(inputs: Explore_Search_Prompt_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cherchez des mods, builds, kits, créateurs et guides par nom, auteur ou identifiant de manifeste.`)
};

const it_explore_search_prompt_text = /** @type {(inputs: Explore_Search_Prompt_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cerca mod, build, kit, creator e guide per nome, autore o ID del manifest.`)
};

const nl_explore_search_prompt_text = /** @type {(inputs: Explore_Search_Prompt_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zoek mods, builds, kits, makers en handleidingen op naam, maker of manifest-ID.`)
};

const pl_explore_search_prompt_text = /** @type {(inputs: Explore_Search_Prompt_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Szukaj modów, buildów, zestawów, twórców i poradników po nazwie, autorze lub ID manifestu.`)
};

const pt_explore_search_prompt_text = /** @type {(inputs: Explore_Search_Prompt_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pesquise mods, builds, kits, criadores e guias por nome, autor ou ID do manifesto.`)
};

const ru_explore_search_prompt_text = /** @type {(inputs: Explore_Search_Prompt_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ищите моды, постройки, наборы, авторов и руководства по названию, автору или ID манифеста.`)
};

const sv_explore_search_prompt_text = /** @type {(inputs: Explore_Search_Prompt_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sök moddar, byggen, kit, skapare och guider på namn, skapare eller manifest-ID.`)
};

const tr_explore_search_prompt_text = /** @type {(inputs: Explore_Search_Prompt_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modları, yapıları, kitleri, üreticileri ve rehberleri ada, üreticiye veya manifest kimliğine göre ara.`)
};

const zh_explore_search_prompt_text = /** @type {(inputs: Explore_Search_Prompt_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`按名称、作者或清单 ID 搜索模组、建筑、套装、创作者和指南。`)
};

const ja_explore_search_prompt_text = /** @type {(inputs: Explore_Search_Prompt_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`名前、作者、マニフェスト ID で MOD、建築、キット、クリエイター、ガイドを検索できます。`)
};

/**
* | output |
* | --- |
* | "Search mods, builds, kits, creators and guides by name, author or manifest ID." |
*
* @param {Explore_Search_Prompt_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_search_prompt_text = /** @type {((inputs?: Explore_Search_Prompt_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Search_Prompt_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_search_prompt_text(inputs)
	if (locale === "de") return de_explore_search_prompt_text(inputs)
	if (locale === "fr") return fr_explore_search_prompt_text(inputs)
	if (locale === "it") return it_explore_search_prompt_text(inputs)
	if (locale === "nl") return nl_explore_search_prompt_text(inputs)
	if (locale === "pl") return pl_explore_search_prompt_text(inputs)
	if (locale === "pt") return pt_explore_search_prompt_text(inputs)
	if (locale === "ru") return ru_explore_search_prompt_text(inputs)
	if (locale === "sv") return sv_explore_search_prompt_text(inputs)
	if (locale === "tr") return tr_explore_search_prompt_text(inputs)
	if (locale === "zh") return zh_explore_search_prompt_text(inputs)
	if (locale === "ja") return ja_explore_search_prompt_text(inputs)
	return en_explore_search_prompt_text(inputs)
});
