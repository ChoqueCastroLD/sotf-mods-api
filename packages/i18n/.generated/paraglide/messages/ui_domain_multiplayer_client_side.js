/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Multiplayer_Client_SideInputs */

const en_ui_domain_multiplayer_client_side = /** @type {(inputs: Ui_Domain_Multiplayer_Client_SideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Only you need it`)
};

const es_ui_domain_multiplayer_client_side = /** @type {(inputs: Ui_Domain_Multiplayer_Client_SideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Solo lo necesitas tú`)
};

const de_ui_domain_multiplayer_client_side = /** @type {(inputs: Ui_Domain_Multiplayer_Client_SideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nur du brauchst ihn`)
};

const fr_ui_domain_multiplayer_client_side = /** @type {(inputs: Ui_Domain_Multiplayer_Client_SideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vous seul en avez besoin`)
};

const it_ui_domain_multiplayer_client_side = /** @type {(inputs: Ui_Domain_Multiplayer_Client_SideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Serve solo a te`)
};

const nl_ui_domain_multiplayer_client_side = /** @type {(inputs: Ui_Domain_Multiplayer_Client_SideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alleen jij hebt hem nodig`)
};

const pl_ui_domain_multiplayer_client_side = /** @type {(inputs: Ui_Domain_Multiplayer_Client_SideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Potrzebujesz go tylko ty`)
};

const pt_ui_domain_multiplayer_client_side = /** @type {(inputs: Ui_Domain_Multiplayer_Client_SideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Só você precisa`)
};

const ru_ui_domain_multiplayer_client_side = /** @type {(inputs: Ui_Domain_Multiplayer_Client_SideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Нужен только вам`)
};

const sv_ui_domain_multiplayer_client_side = /** @type {(inputs: Ui_Domain_Multiplayer_Client_SideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bara du behöver den`)
};

const tr_ui_domain_multiplayer_client_side = /** @type {(inputs: Ui_Domain_Multiplayer_Client_SideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yalnızca sende olması yeterli`)
};

const zh_ui_domain_multiplayer_client_side = /** @type {(inputs: Ui_Domain_Multiplayer_Client_SideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`只有你需要安装`)
};

const ja_ui_domain_multiplayer_client_side = /** @type {(inputs: Ui_Domain_Multiplayer_Client_SideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`自分だけ導入すれば OK`)
};

/**
* | output |
* | --- |
* | "Only you need it" |
*
* @param {Ui_Domain_Multiplayer_Client_SideInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_multiplayer_client_side = /** @type {((inputs?: Ui_Domain_Multiplayer_Client_SideInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Multiplayer_Client_SideInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_multiplayer_client_side(inputs)
	if (locale === "de") return de_ui_domain_multiplayer_client_side(inputs)
	if (locale === "fr") return fr_ui_domain_multiplayer_client_side(inputs)
	if (locale === "it") return it_ui_domain_multiplayer_client_side(inputs)
	if (locale === "nl") return nl_ui_domain_multiplayer_client_side(inputs)
	if (locale === "pl") return pl_ui_domain_multiplayer_client_side(inputs)
	if (locale === "pt") return pt_ui_domain_multiplayer_client_side(inputs)
	if (locale === "ru") return ru_ui_domain_multiplayer_client_side(inputs)
	if (locale === "sv") return sv_ui_domain_multiplayer_client_side(inputs)
	if (locale === "tr") return tr_ui_domain_multiplayer_client_side(inputs)
	if (locale === "zh") return zh_ui_domain_multiplayer_client_side(inputs)
	if (locale === "ja") return ja_ui_domain_multiplayer_client_side(inputs)
	return en_ui_domain_multiplayer_client_side(inputs)
});
