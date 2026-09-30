/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Multiplayer_Client_SideInputs */

const en_mod_multiplayer_client_side = /** @type {(inputs: Mod_Multiplayer_Client_SideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Only you need it`)
};

const es_mod_multiplayer_client_side = /** @type {(inputs: Mod_Multiplayer_Client_SideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Solo lo necesitas tú`)
};

const de_mod_multiplayer_client_side = /** @type {(inputs: Mod_Multiplayer_Client_SideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nur du brauchst ihn`)
};

const fr_mod_multiplayer_client_side = /** @type {(inputs: Mod_Multiplayer_Client_SideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vous seul en avez besoin`)
};

const it_mod_multiplayer_client_side = /** @type {(inputs: Mod_Multiplayer_Client_SideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Serve solo a te`)
};

const nl_mod_multiplayer_client_side = /** @type {(inputs: Mod_Multiplayer_Client_SideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alleen jij hebt hem nodig`)
};

const pl_mod_multiplayer_client_side = /** @type {(inputs: Mod_Multiplayer_Client_SideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Potrzebujesz go tylko ty`)
};

const pt_mod_multiplayer_client_side = /** @type {(inputs: Mod_Multiplayer_Client_SideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Só você precisa`)
};

const ru_mod_multiplayer_client_side = /** @type {(inputs: Mod_Multiplayer_Client_SideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Нужен только вам`)
};

const sv_mod_multiplayer_client_side = /** @type {(inputs: Mod_Multiplayer_Client_SideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bara du behöver den`)
};

const tr_mod_multiplayer_client_side = /** @type {(inputs: Mod_Multiplayer_Client_SideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yalnızca sende olması yeterli`)
};

const zh_mod_multiplayer_client_side = /** @type {(inputs: Mod_Multiplayer_Client_SideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`只有你需要安装`)
};

const ja_mod_multiplayer_client_side = /** @type {(inputs: Mod_Multiplayer_Client_SideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`自分だけ導入すれば OK`)
};

/**
* | output |
* | --- |
* | "Only you need it" |
*
* @param {Mod_Multiplayer_Client_SideInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_multiplayer_client_side = /** @type {((inputs?: Mod_Multiplayer_Client_SideInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Multiplayer_Client_SideInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_multiplayer_client_side(inputs)
	if (locale === "de") return de_mod_multiplayer_client_side(inputs)
	if (locale === "fr") return fr_mod_multiplayer_client_side(inputs)
	if (locale === "it") return it_mod_multiplayer_client_side(inputs)
	if (locale === "nl") return nl_mod_multiplayer_client_side(inputs)
	if (locale === "pl") return pl_mod_multiplayer_client_side(inputs)
	if (locale === "pt") return pt_mod_multiplayer_client_side(inputs)
	if (locale === "ru") return ru_mod_multiplayer_client_side(inputs)
	if (locale === "sv") return sv_mod_multiplayer_client_side(inputs)
	if (locale === "tr") return tr_mod_multiplayer_client_side(inputs)
	if (locale === "zh") return zh_mod_multiplayer_client_side(inputs)
	if (locale === "ja") return ja_mod_multiplayer_client_side(inputs)
	return en_mod_multiplayer_client_side(inputs)
});
