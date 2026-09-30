/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ network: NonNullable<unknown> }} Kits_Share_OnInputs */

const en_kits_share_on = /** @type {(inputs: Kits_Share_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Share on ${i?.network}`)
};

const es_kits_share_on = /** @type {(inputs: Kits_Share_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Compartir en ${i?.network}`)
};

const de_kits_share_on = /** @type {(inputs: Kits_Share_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Auf ${i?.network} teilen`)
};

const fr_kits_share_on = /** @type {(inputs: Kits_Share_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Partager sur ${i?.network}`)
};

const it_kits_share_on = /** @type {(inputs: Kits_Share_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Condividi su ${i?.network}`)
};

const nl_kits_share_on = /** @type {(inputs: Kits_Share_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Delen op ${i?.network}`)
};

const pl_kits_share_on = /** @type {(inputs: Kits_Share_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Udostępnij na ${i?.network}`)
};

const pt_kits_share_on = /** @type {(inputs: Kits_Share_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Compartilhar no ${i?.network}`)
};

const ru_kits_share_on = /** @type {(inputs: Kits_Share_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Поделиться в ${i?.network}`)
};

const sv_kits_share_on = /** @type {(inputs: Kits_Share_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Dela på ${i?.network}`)
};

const tr_kits_share_on = /** @type {(inputs: Kits_Share_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.network} üzerinde paylaş`)
};

const zh_kits_share_on = /** @type {(inputs: Kits_Share_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`分享到 ${i?.network}`)
};

const ja_kits_share_on = /** @type {(inputs: Kits_Share_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.network} で共有`)
};

/**
* | output |
* | --- |
* | "Share on {network}" |
*
* @param {Kits_Share_OnInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_share_on = /** @type {((inputs: Kits_Share_OnInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Share_OnInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_share_on(inputs)
	if (locale === "de") return de_kits_share_on(inputs)
	if (locale === "fr") return fr_kits_share_on(inputs)
	if (locale === "it") return it_kits_share_on(inputs)
	if (locale === "nl") return nl_kits_share_on(inputs)
	if (locale === "pl") return pl_kits_share_on(inputs)
	if (locale === "pt") return pt_kits_share_on(inputs)
	if (locale === "ru") return ru_kits_share_on(inputs)
	if (locale === "sv") return sv_kits_share_on(inputs)
	if (locale === "tr") return tr_kits_share_on(inputs)
	if (locale === "zh") return zh_kits_share_on(inputs)
	if (locale === "ja") return ja_kits_share_on(inputs)
	return en_kits_share_on(inputs)
});
