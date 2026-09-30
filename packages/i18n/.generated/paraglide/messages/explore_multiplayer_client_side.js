/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Multiplayer_Client_SideInputs */

const en_explore_multiplayer_client_side = /** @type {(inputs: Explore_Multiplayer_Client_SideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Only you need it`)
};

const es_explore_multiplayer_client_side = /** @type {(inputs: Explore_Multiplayer_Client_SideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Solo lo necesitas tú`)
};

const de_explore_multiplayer_client_side = /** @type {(inputs: Explore_Multiplayer_Client_SideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nur du brauchst sie`)
};

const fr_explore_multiplayer_client_side = /** @type {(inputs: Explore_Multiplayer_Client_SideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vous seul en avez besoin`)
};

const it_explore_multiplayer_client_side = /** @type {(inputs: Explore_Multiplayer_Client_SideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Serve solo a te`)
};

const nl_explore_multiplayer_client_side = /** @type {(inputs: Explore_Multiplayer_Client_SideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alleen jij hebt hem nodig`)
};

const pl_explore_multiplayer_client_side = /** @type {(inputs: Explore_Multiplayer_Client_SideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Potrzebujesz go tylko ty`)
};

const pt_explore_multiplayer_client_side = /** @type {(inputs: Explore_Multiplayer_Client_SideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Só você precisa`)
};

const ru_explore_multiplayer_client_side = /** @type {(inputs: Explore_Multiplayer_Client_SideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Нужен только вам`)
};

const sv_explore_multiplayer_client_side = /** @type {(inputs: Explore_Multiplayer_Client_SideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bara du behöver den`)
};

const tr_explore_multiplayer_client_side = /** @type {(inputs: Explore_Multiplayer_Client_SideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yalnızca senin kurman yeter`)
};

const zh_explore_multiplayer_client_side = /** @type {(inputs: Explore_Multiplayer_Client_SideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`只需你安装`)
};

const ja_explore_multiplayer_client_side = /** @type {(inputs: Explore_Multiplayer_Client_SideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`自分だけ導入すれば OK`)
};

/**
* | output |
* | --- |
* | "Only you need it" |
*
* @param {Explore_Multiplayer_Client_SideInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_multiplayer_client_side = /** @type {((inputs?: Explore_Multiplayer_Client_SideInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Multiplayer_Client_SideInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_multiplayer_client_side(inputs)
	if (locale === "de") return de_explore_multiplayer_client_side(inputs)
	if (locale === "fr") return fr_explore_multiplayer_client_side(inputs)
	if (locale === "it") return it_explore_multiplayer_client_side(inputs)
	if (locale === "nl") return nl_explore_multiplayer_client_side(inputs)
	if (locale === "pl") return pl_explore_multiplayer_client_side(inputs)
	if (locale === "pt") return pt_explore_multiplayer_client_side(inputs)
	if (locale === "ru") return ru_explore_multiplayer_client_side(inputs)
	if (locale === "sv") return sv_explore_multiplayer_client_side(inputs)
	if (locale === "tr") return tr_explore_multiplayer_client_side(inputs)
	if (locale === "zh") return zh_explore_multiplayer_client_side(inputs)
	if (locale === "ja") return ja_explore_multiplayer_client_side(inputs)
	return en_explore_multiplayer_client_side(inputs)
});
