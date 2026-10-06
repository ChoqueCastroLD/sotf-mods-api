/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Compat_IntroInputs */

const en_upload_compat_intro = /** @type {(inputs: Upload_Compat_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tell players where your mod runs.`)
};

const es_upload_compat_intro = /** @type {(inputs: Upload_Compat_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cuenta a los jugadores dónde funciona tu mod.`)
};

const de_upload_compat_intro = /** @type {(inputs: Upload_Compat_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sag Spielern, wo dein Mod läuft.`)
};

const fr_upload_compat_intro = /** @type {(inputs: Upload_Compat_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dites aux joueurs où votre mod fonctionne.`)
};

const it_upload_compat_intro = /** @type {(inputs: Upload_Compat_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Di’ ai giocatori dove funziona la tua mod.`)
};

const nl_upload_compat_intro = /** @type {(inputs: Upload_Compat_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vertel spelers waar je mod werkt.`)
};

const pl_upload_compat_intro = /** @type {(inputs: Upload_Compat_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Powiedz graczom, gdzie działa twój mod.`)
};

const pt_upload_compat_intro = /** @type {(inputs: Upload_Compat_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conte aos jogadores onde seu mod funciona.`)
};

const ru_upload_compat_intro = /** @type {(inputs: Upload_Compat_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Расскажите игрокам, где работает ваш мод.`)
};

const sv_upload_compat_intro = /** @type {(inputs: Upload_Compat_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Berätta för spelarna var din modd fungerar.`)
};

const tr_upload_compat_intro = /** @type {(inputs: Upload_Compat_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oyunculara modunun nerede çalıştığını söyle.`)
};

const zh_upload_compat_intro = /** @type {(inputs: Upload_Compat_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`告诉玩家你的模组能在哪里运行。`)
};

const ja_upload_compat_intro = /** @type {(inputs: Upload_Compat_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MODが動く環境をプレイヤーに伝えましょう。`)
};

/**
* | output |
* | --- |
* | "Tell players where your mod runs." |
*
* @param {Upload_Compat_IntroInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_compat_intro = /** @type {((inputs?: Upload_Compat_IntroInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Compat_IntroInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_compat_intro(inputs)
	if (locale === "de") return de_upload_compat_intro(inputs)
	if (locale === "fr") return fr_upload_compat_intro(inputs)
	if (locale === "it") return it_upload_compat_intro(inputs)
	if (locale === "nl") return nl_upload_compat_intro(inputs)
	if (locale === "pl") return pl_upload_compat_intro(inputs)
	if (locale === "pt") return pt_upload_compat_intro(inputs)
	if (locale === "ru") return ru_upload_compat_intro(inputs)
	if (locale === "sv") return sv_upload_compat_intro(inputs)
	if (locale === "tr") return tr_upload_compat_intro(inputs)
	if (locale === "zh") return zh_upload_compat_intro(inputs)
	if (locale === "ja") return ja_upload_compat_intro(inputs)
	return en_upload_compat_intro(inputs)
});
