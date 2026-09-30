/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Share_Qr_HintInputs */

const en_kits_share_qr_hint = /** @type {(inputs: Kits_Share_Qr_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scan it with a phone to open the kit.`)
};

const es_kits_share_qr_hint = /** @type {(inputs: Kits_Share_Qr_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escanéalo con el móvil para abrir el kit.`)
};

const de_kits_share_qr_hint = /** @type {(inputs: Kits_Share_Qr_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scanne ihn mit dem Handy, um das Kit zu öffnen.`)
};

const fr_kits_share_qr_hint = /** @type {(inputs: Kits_Share_Qr_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scannez-le avec un téléphone pour ouvrir le kit.`)
};

const it_kits_share_qr_hint = /** @type {(inputs: Kits_Share_Qr_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scansionalo con il telefono per aprire il kit.`)
};

const nl_kits_share_qr_hint = /** @type {(inputs: Kits_Share_Qr_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scan hem met een telefoon om de kit te openen.`)
};

const pl_kits_share_qr_hint = /** @type {(inputs: Kits_Share_Qr_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zeskanuj go telefonem, aby otworzyć zestaw.`)
};

const pt_kits_share_qr_hint = /** @type {(inputs: Kits_Share_Qr_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escaneie com o celular para abrir o kit.`)
};

const ru_kits_share_qr_hint = /** @type {(inputs: Kits_Share_Qr_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отсканируйте телефоном, чтобы открыть набор.`)
};

const sv_kits_share_qr_hint = /** @type {(inputs: Kits_Share_Qr_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skanna den med mobilen för att öppna kitet.`)
};

const tr_kits_share_qr_hint = /** @type {(inputs: Kits_Share_Qr_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kiti açmak için telefonla tara.`)
};

const zh_kits_share_qr_hint = /** @type {(inputs: Kits_Share_Qr_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`用手机扫码即可打开套装。`)
};

const ja_kits_share_qr_hint = /** @type {(inputs: Kits_Share_Qr_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`スマートフォンで読み取るとキットが開きます。`)
};

/**
* | output |
* | --- |
* | "Scan it with a phone to open the kit." |
*
* @param {Kits_Share_Qr_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_share_qr_hint = /** @type {((inputs?: Kits_Share_Qr_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Share_Qr_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_share_qr_hint(inputs)
	if (locale === "de") return de_kits_share_qr_hint(inputs)
	if (locale === "fr") return fr_kits_share_qr_hint(inputs)
	if (locale === "it") return it_kits_share_qr_hint(inputs)
	if (locale === "nl") return nl_kits_share_qr_hint(inputs)
	if (locale === "pl") return pl_kits_share_qr_hint(inputs)
	if (locale === "pt") return pt_kits_share_qr_hint(inputs)
	if (locale === "ru") return ru_kits_share_qr_hint(inputs)
	if (locale === "sv") return sv_kits_share_qr_hint(inputs)
	if (locale === "tr") return tr_kits_share_qr_hint(inputs)
	if (locale === "zh") return zh_kits_share_qr_hint(inputs)
	if (locale === "ja") return ja_kits_share_qr_hint(inputs)
	return en_kits_share_qr_hint(inputs)
});
