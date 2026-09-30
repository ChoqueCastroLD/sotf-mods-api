/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ network: NonNullable<unknown> }} Mod_Share_OnInputs */

const en_mod_share_on = /** @type {(inputs: Mod_Share_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Share on ${i?.network}`)
};

const es_mod_share_on = /** @type {(inputs: Mod_Share_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Compartir en ${i?.network}`)
};

const de_mod_share_on = /** @type {(inputs: Mod_Share_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Auf ${i?.network} teilen`)
};

const fr_mod_share_on = /** @type {(inputs: Mod_Share_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Partager sur ${i?.network}`)
};

const it_mod_share_on = /** @type {(inputs: Mod_Share_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Condividi su ${i?.network}`)
};

const nl_mod_share_on = /** @type {(inputs: Mod_Share_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Delen op ${i?.network}`)
};

const pl_mod_share_on = /** @type {(inputs: Mod_Share_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Udostępnij na ${i?.network}`)
};

const pt_mod_share_on = /** @type {(inputs: Mod_Share_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Compartilhar no ${i?.network}`)
};

const ru_mod_share_on = /** @type {(inputs: Mod_Share_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Поделиться в ${i?.network}`)
};

const sv_mod_share_on = /** @type {(inputs: Mod_Share_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Dela på ${i?.network}`)
};

const tr_mod_share_on = /** @type {(inputs: Mod_Share_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.network} üzerinde paylaş`)
};

const zh_mod_share_on = /** @type {(inputs: Mod_Share_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`分享到 ${i?.network}`)
};

const ja_mod_share_on = /** @type {(inputs: Mod_Share_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.network} で共有`)
};

/**
* | output |
* | --- |
* | "Share on {network}" |
*
* @param {Mod_Share_OnInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_share_on = /** @type {((inputs: Mod_Share_OnInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Share_OnInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_share_on(inputs)
	if (locale === "de") return de_mod_share_on(inputs)
	if (locale === "fr") return fr_mod_share_on(inputs)
	if (locale === "it") return it_mod_share_on(inputs)
	if (locale === "nl") return nl_mod_share_on(inputs)
	if (locale === "pl") return pl_mod_share_on(inputs)
	if (locale === "pt") return pt_mod_share_on(inputs)
	if (locale === "ru") return ru_mod_share_on(inputs)
	if (locale === "sv") return sv_mod_share_on(inputs)
	if (locale === "tr") return tr_mod_share_on(inputs)
	if (locale === "zh") return zh_mod_share_on(inputs)
	if (locale === "ja") return ja_mod_share_on(inputs)
	return en_mod_share_on(inputs)
});
