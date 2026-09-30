/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Share_Qr_HintInputs */

const en_mod_share_qr_hint = /** @type {(inputs: Mod_Share_Qr_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scan it with your phone to open the page.`)
};

const es_mod_share_qr_hint = /** @type {(inputs: Mod_Share_Qr_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escanéalo con el móvil para abrir la página.`)
};

const de_mod_share_qr_hint = /** @type {(inputs: Mod_Share_Qr_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scanne ihn mit dem Handy, um die Seite zu öffnen.`)
};

const fr_mod_share_qr_hint = /** @type {(inputs: Mod_Share_Qr_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scannez-le avec votre téléphone pour ouvrir la page.`)
};

const it_mod_share_qr_hint = /** @type {(inputs: Mod_Share_Qr_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scansionalo con il telefono per aprire la pagina.`)
};

const nl_mod_share_qr_hint = /** @type {(inputs: Mod_Share_Qr_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scan hem met je telefoon om de pagina te openen.`)
};

const pl_mod_share_qr_hint = /** @type {(inputs: Mod_Share_Qr_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zeskanuj go telefonem, aby otworzyć stronę.`)
};

const pt_mod_share_qr_hint = /** @type {(inputs: Mod_Share_Qr_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escaneie com o celular para abrir a página.`)
};

const ru_mod_share_qr_hint = /** @type {(inputs: Mod_Share_Qr_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отсканируйте телефоном, чтобы открыть страницу.`)
};

const sv_mod_share_qr_hint = /** @type {(inputs: Mod_Share_Qr_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skanna den med mobilen för att öppna sidan.`)
};

const tr_mod_share_qr_hint = /** @type {(inputs: Mod_Share_Qr_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sayfayı açmak için telefonunla tara.`)
};

const zh_mod_share_qr_hint = /** @type {(inputs: Mod_Share_Qr_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`用手机扫描即可打开页面。`)
};

const ja_mod_share_qr_hint = /** @type {(inputs: Mod_Share_Qr_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`スマホで読み取るとページが開きます。`)
};

/**
* | output |
* | --- |
* | "Scan it with your phone to open the page." |
*
* @param {Mod_Share_Qr_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_share_qr_hint = /** @type {((inputs?: Mod_Share_Qr_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Share_Qr_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_share_qr_hint(inputs)
	if (locale === "de") return de_mod_share_qr_hint(inputs)
	if (locale === "fr") return fr_mod_share_qr_hint(inputs)
	if (locale === "it") return it_mod_share_qr_hint(inputs)
	if (locale === "nl") return nl_mod_share_qr_hint(inputs)
	if (locale === "pl") return pl_mod_share_qr_hint(inputs)
	if (locale === "pt") return pt_mod_share_qr_hint(inputs)
	if (locale === "ru") return ru_mod_share_qr_hint(inputs)
	if (locale === "sv") return sv_mod_share_qr_hint(inputs)
	if (locale === "tr") return tr_mod_share_qr_hint(inputs)
	if (locale === "zh") return zh_mod_share_qr_hint(inputs)
	if (locale === "ja") return ja_mod_share_qr_hint(inputs)
	return en_mod_share_qr_hint(inputs)
});
