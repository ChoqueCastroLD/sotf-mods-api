/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Forked_Banner_TextInputs */

const en_kits_forked_banner_text = /** @type {(inputs: Kits_Forked_Banner_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`It’s private for now. Change what you like, then make it public to share it.`)
};

const es_kits_forked_banner_text = /** @type {(inputs: Kits_Forked_Banner_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De momento es privada. Cambia lo que quieras y hazla pública para compartirla.`)
};

const de_kits_forked_banner_text = /** @type {(inputs: Kits_Forked_Banner_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Er ist vorerst privat. Ändere, was du willst, und mach ihn dann öffentlich, um ihn zu teilen.`)
};

const fr_kits_forked_banner_text = /** @type {(inputs: Kits_Forked_Banner_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elle est privée pour l’instant. Modifiez ce que vous voulez, puis rendez-la publique pour la partager.`)
};

const it_kits_forked_banner_text = /** @type {(inputs: Kits_Forked_Banner_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Per ora è privato. Cambia ciò che vuoi, poi rendilo pubblico per condividerlo.`)
};

const nl_kits_forked_banner_text = /** @type {(inputs: Kits_Forked_Banner_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hij is voorlopig privé. Pas aan wat je wilt en maak hem daarna openbaar om te delen.`)
};

const pl_kits_forked_banner_text = /** @type {(inputs: Kits_Forked_Banner_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Na razie jest prywatna. Zmień, co chcesz, a potem ustaw ją jako publiczną, aby się nią podzielić.`)
};

const pt_kits_forked_banner_text = /** @type {(inputs: Kits_Forked_Banner_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Por enquanto ela é privada. Mude o que quiser e depois torne-a pública para compartilhar.`)
};

const ru_kits_forked_banner_text = /** @type {(inputs: Kits_Forked_Banner_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Пока она скрыта. Измените что нужно, а затем сделайте её публичной, чтобы поделиться.`)
};

const sv_kits_forked_banner_text = /** @type {(inputs: Kits_Forked_Banner_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Den är privat tills vidare. Ändra vad du vill och gör den sedan offentlig för att dela den.`)
};

const tr_kits_forked_banner_text = /** @type {(inputs: Kits_Forked_Banner_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Şimdilik gizli. İstediğini değiştir, sonra paylaşmak için herkese açık yap.`)
};

const zh_kits_forked_banner_text = /** @type {(inputs: Kits_Forked_Banner_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`目前为私密状态。按需修改后，设为公开即可分享。`)
};

const ja_kits_forked_banner_text = /** @type {(inputs: Kits_Forked_Banner_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`いまは非公開です。自由に変更して、共有するときは公開にしてください。`)
};

/**
* | output |
* | --- |
* | "It’s private for now. Change what you like, then make it public to share it." |
*
* @param {Kits_Forked_Banner_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_forked_banner_text = /** @type {((inputs?: Kits_Forked_Banner_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Forked_Banner_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_forked_banner_text(inputs)
	if (locale === "de") return de_kits_forked_banner_text(inputs)
	if (locale === "fr") return fr_kits_forked_banner_text(inputs)
	if (locale === "it") return it_kits_forked_banner_text(inputs)
	if (locale === "nl") return nl_kits_forked_banner_text(inputs)
	if (locale === "pl") return pl_kits_forked_banner_text(inputs)
	if (locale === "pt") return pt_kits_forked_banner_text(inputs)
	if (locale === "ru") return ru_kits_forked_banner_text(inputs)
	if (locale === "sv") return sv_kits_forked_banner_text(inputs)
	if (locale === "tr") return tr_kits_forked_banner_text(inputs)
	if (locale === "zh") return zh_kits_forked_banner_text(inputs)
	if (locale === "ja") return ja_kits_forked_banner_text(inputs)
	return en_kits_forked_banner_text(inputs)
});
