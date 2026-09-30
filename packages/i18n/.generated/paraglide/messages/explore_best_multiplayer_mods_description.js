/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Best_Multiplayer_Mods_DescriptionInputs */

const en_explore_best_multiplayer_mods_description = /** @type {(inputs: Explore_Best_Multiplayer_Mods_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sons of the Forest mods that work in co-op, with who needs to install them: only you, the host or every player.`)
};

const es_explore_best_multiplayer_mods_description = /** @type {(inputs: Explore_Best_Multiplayer_Mods_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods de Sons of the Forest que funcionan en cooperativo, indicando quién debe instalarlos: solo tú, el anfitrión o todos.`)
};

const de_explore_best_multiplayer_mods_description = /** @type {(inputs: Explore_Best_Multiplayer_Mods_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sons-of-the-Forest-Mods für Koop, mit Angabe, wer sie installieren muss: nur du, der Host oder alle.`)
};

const fr_explore_best_multiplayer_mods_description = /** @type {(inputs: Explore_Best_Multiplayer_Mods_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Des mods Sons of the Forest qui marchent en coop, avec qui doit les installer : vous seul, l’hôte ou tout le monde.`)
};

const it_explore_best_multiplayer_mods_description = /** @type {(inputs: Explore_Best_Multiplayer_Mods_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod di Sons of the Forest che funzionano in cooperativa, con chi deve installarle: solo tu, l’host o tutti.`)
};

const nl_explore_best_multiplayer_mods_description = /** @type {(inputs: Explore_Best_Multiplayer_Mods_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sons of the Forest-mods die in co-op werken, met wie ze moet installeren: alleen jij, de host of iedereen.`)
};

const pl_explore_best_multiplayer_mods_description = /** @type {(inputs: Explore_Best_Multiplayer_Mods_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mody do Sons of the Forest działające w kooperacji, z informacją, kto musi je zainstalować: tylko ty, host czy wszyscy.`)
};

const pt_explore_best_multiplayer_mods_description = /** @type {(inputs: Explore_Best_Multiplayer_Mods_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods de Sons of the Forest que funcionam no cooperativo, com quem precisa instalá-los: só você, o anfitrião ou todos.`)
};

const ru_explore_best_multiplayer_mods_description = /** @type {(inputs: Explore_Best_Multiplayer_Mods_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Моды для Sons of the Forest, работающие в кооперативе, с пометкой, кому их ставить: только вам, хосту или всем.`)
};

const sv_explore_best_multiplayer_mods_description = /** @type {(inputs: Explore_Best_Multiplayer_Mods_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moddar till Sons of the Forest som fungerar i co-op, med vem som behöver installera dem: bara du, värden eller alla.`)
};

const tr_explore_best_multiplayer_mods_description = /** @type {(inputs: Explore_Best_Multiplayer_Mods_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ortak oyunda çalışan Sons of the Forest modları ve kimin kurması gerektiği: yalnızca sen, sunucu sahibi ya da herkes.`)
};

const zh_explore_best_multiplayer_mods_description = /** @type {(inputs: Explore_Best_Multiplayer_Mods_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`可在合作模式中使用的 Sons of the Forest 模组，并注明谁需要安装：只需你、仅房主或所有人。`)
};

const ja_explore_best_multiplayer_mods_description = /** @type {(inputs: Explore_Best_Multiplayer_Mods_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`協力プレイで使える Sons of the Forest の MOD。自分だけ、ホストのみ、全員のうち誰が導入すべきかも表示。`)
};

/**
* | output |
* | --- |
* | "Sons of the Forest mods that work in co-op, with who needs to install them: only you, the host or every player." |
*
* @param {Explore_Best_Multiplayer_Mods_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_best_multiplayer_mods_description = /** @type {((inputs?: Explore_Best_Multiplayer_Mods_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Best_Multiplayer_Mods_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_best_multiplayer_mods_description(inputs)
	if (locale === "de") return de_explore_best_multiplayer_mods_description(inputs)
	if (locale === "fr") return fr_explore_best_multiplayer_mods_description(inputs)
	if (locale === "it") return it_explore_best_multiplayer_mods_description(inputs)
	if (locale === "nl") return nl_explore_best_multiplayer_mods_description(inputs)
	if (locale === "pl") return pl_explore_best_multiplayer_mods_description(inputs)
	if (locale === "pt") return pt_explore_best_multiplayer_mods_description(inputs)
	if (locale === "ru") return ru_explore_best_multiplayer_mods_description(inputs)
	if (locale === "sv") return sv_explore_best_multiplayer_mods_description(inputs)
	if (locale === "tr") return tr_explore_best_multiplayer_mods_description(inputs)
	if (locale === "zh") return zh_explore_best_multiplayer_mods_description(inputs)
	if (locale === "ja") return ja_explore_best_multiplayer_mods_description(inputs)
	return en_explore_best_multiplayer_mods_description(inputs)
});
