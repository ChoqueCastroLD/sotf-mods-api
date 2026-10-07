/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Editor_Action_AnnounceInputs */

const en_jams_editor_action_announce = /** @type {(inputs: Jams_Editor_Action_AnnounceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Announce jam`)
};

const es_jams_editor_action_announce = /** @type {(inputs: Jams_Editor_Action_AnnounceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anunciar el jam`)
};

const de_jams_editor_action_announce = /** @type {(inputs: Jams_Editor_Action_AnnounceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jam ankündigen`)
};

const fr_jams_editor_action_announce = /** @type {(inputs: Jams_Editor_Action_AnnounceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annoncer le jam`)
};

const it_jams_editor_action_announce = /** @type {(inputs: Jams_Editor_Action_AnnounceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annuncia il jam`)
};

const nl_jams_editor_action_announce = /** @type {(inputs: Jams_Editor_Action_AnnounceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jam aankondigen`)
};

const pl_jams_editor_action_announce = /** @type {(inputs: Jams_Editor_Action_AnnounceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ogłoś jam`)
};

const pt_jams_editor_action_announce = /** @type {(inputs: Jams_Editor_Action_AnnounceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anunciar a jam`)
};

const ru_jams_editor_action_announce = /** @type {(inputs: Jams_Editor_Action_AnnounceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Объявить джем`)
};

const sv_jams_editor_action_announce = /** @type {(inputs: Jams_Editor_Action_AnnounceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annonsera jam`)
};

const tr_jams_editor_action_announce = /** @type {(inputs: Jams_Editor_Action_AnnounceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jam’i duyur`)
};

const zh_jams_editor_action_announce = /** @type {(inputs: Jams_Editor_Action_AnnounceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`公布 Jam`)
};

const ja_jams_editor_action_announce = /** @type {(inputs: Jams_Editor_Action_AnnounceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ジャムを告知する`)
};

/**
* | output |
* | --- |
* | "Announce jam" |
*
* @param {Jams_Editor_Action_AnnounceInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_editor_action_announce = /** @type {((inputs?: Jams_Editor_Action_AnnounceInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_Action_AnnounceInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_editor_action_announce(inputs)
	if (locale === "de") return de_jams_editor_action_announce(inputs)
	if (locale === "fr") return fr_jams_editor_action_announce(inputs)
	if (locale === "it") return it_jams_editor_action_announce(inputs)
	if (locale === "nl") return nl_jams_editor_action_announce(inputs)
	if (locale === "pl") return pl_jams_editor_action_announce(inputs)
	if (locale === "pt") return pt_jams_editor_action_announce(inputs)
	if (locale === "ru") return ru_jams_editor_action_announce(inputs)
	if (locale === "sv") return sv_jams_editor_action_announce(inputs)
	if (locale === "tr") return tr_jams_editor_action_announce(inputs)
	if (locale === "zh") return zh_jams_editor_action_announce(inputs)
	if (locale === "ja") return ja_jams_editor_action_announce(inputs)
	return en_jams_editor_action_announce(inputs)
});
