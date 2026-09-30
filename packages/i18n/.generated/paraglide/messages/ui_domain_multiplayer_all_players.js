/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Multiplayer_All_PlayersInputs */

const en_ui_domain_multiplayer_all_players = /** @type {(inputs: Ui_Domain_Multiplayer_All_PlayersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Everyone needs it`)
};

const es_ui_domain_multiplayer_all_players = /** @type {(inputs: Ui_Domain_Multiplayer_All_PlayersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todos lo necesitan`)
};

const de_ui_domain_multiplayer_all_players = /** @type {(inputs: Ui_Domain_Multiplayer_All_PlayersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alle brauchen ihn`)
};

const fr_ui_domain_multiplayer_all_players = /** @type {(inputs: Ui_Domain_Multiplayer_All_PlayersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Requis pour tous`)
};

const it_ui_domain_multiplayer_all_players = /** @type {(inputs: Ui_Domain_Multiplayer_All_PlayersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Serve a tutti`)
};

const nl_ui_domain_multiplayer_all_players = /** @type {(inputs: Ui_Domain_Multiplayer_All_PlayersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Iedereen heeft hem nodig`)
};

const pl_ui_domain_multiplayer_all_players = /** @type {(inputs: Ui_Domain_Multiplayer_All_PlayersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Potrzebny wszystkim`)
};

const pt_ui_domain_multiplayer_all_players = /** @type {(inputs: Ui_Domain_Multiplayer_All_PlayersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todos precisam`)
};

const ru_ui_domain_multiplayer_all_players = /** @type {(inputs: Ui_Domain_Multiplayer_All_PlayersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Нужен всем`)
};

const sv_ui_domain_multiplayer_all_players = /** @type {(inputs: Ui_Domain_Multiplayer_All_PlayersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alla behöver den`)
};

const tr_ui_domain_multiplayer_all_players = /** @type {(inputs: Ui_Domain_Multiplayer_All_PlayersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Herkeste olmalı`)
};

const zh_ui_domain_multiplayer_all_players = /** @type {(inputs: Ui_Domain_Multiplayer_All_PlayersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`所有人都需要`)
};

const ja_ui_domain_multiplayer_all_players = /** @type {(inputs: Ui_Domain_Multiplayer_All_PlayersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`全員に必要`)
};

/**
* | output |
* | --- |
* | "Everyone needs it" |
*
* @param {Ui_Domain_Multiplayer_All_PlayersInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_multiplayer_all_players = /** @type {((inputs?: Ui_Domain_Multiplayer_All_PlayersInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Multiplayer_All_PlayersInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_multiplayer_all_players(inputs)
	if (locale === "de") return de_ui_domain_multiplayer_all_players(inputs)
	if (locale === "fr") return fr_ui_domain_multiplayer_all_players(inputs)
	if (locale === "it") return it_ui_domain_multiplayer_all_players(inputs)
	if (locale === "nl") return nl_ui_domain_multiplayer_all_players(inputs)
	if (locale === "pl") return pl_ui_domain_multiplayer_all_players(inputs)
	if (locale === "pt") return pt_ui_domain_multiplayer_all_players(inputs)
	if (locale === "ru") return ru_ui_domain_multiplayer_all_players(inputs)
	if (locale === "sv") return sv_ui_domain_multiplayer_all_players(inputs)
	if (locale === "tr") return tr_ui_domain_multiplayer_all_players(inputs)
	if (locale === "zh") return zh_ui_domain_multiplayer_all_players(inputs)
	if (locale === "ja") return ja_ui_domain_multiplayer_all_players(inputs)
	return en_ui_domain_multiplayer_all_players(inputs)
});
