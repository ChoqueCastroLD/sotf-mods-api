/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Release_IntroInputs */

const en_upload_release_intro = /** @type {(inputs: Upload_Release_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The version comes from manifest.json. Tell players what changed.`)
};

const es_upload_release_intro = /** @type {(inputs: Upload_Release_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La versión sale de manifest.json. Cuenta a los jugadores qué ha cambiado.`)
};

const de_upload_release_intro = /** @type {(inputs: Upload_Release_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Version stammt aus manifest.json. Erzähl den Spielern, was sich geändert hat.`)
};

const fr_upload_release_intro = /** @type {(inputs: Upload_Release_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La version vient de manifest.json. Dites aux joueurs ce qui a changé.`)
};

const it_upload_release_intro = /** @type {(inputs: Upload_Release_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La versione arriva da manifest.json. Racconta ai giocatori cosa è cambiato.`)
};

const nl_upload_release_intro = /** @type {(inputs: Upload_Release_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De versie komt uit manifest.json. Vertel spelers wat er veranderd is.`)
};

const pl_upload_release_intro = /** @type {(inputs: Upload_Release_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wersja pochodzi z manifest.json. Powiedz graczom, co się zmieniło.`)
};

const pt_upload_release_intro = /** @type {(inputs: Upload_Release_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A versão vem do manifest.json. Conte aos jogadores o que mudou.`)
};

const ru_upload_release_intro = /** @type {(inputs: Upload_Release_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Версия берётся из manifest.json. Расскажите игрокам, что изменилось.`)
};

const sv_upload_release_intro = /** @type {(inputs: Upload_Release_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versionen kommer från manifest.json. Berätta för spelarna vad som ändrats.`)
};

const tr_upload_release_intro = /** @type {(inputs: Upload_Release_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sürüm manifest.json’dan gelir. Oyunculara nelerin değiştiğini anlat.`)
};

const zh_upload_release_intro = /** @type {(inputs: Upload_Release_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`版本号来自 manifest.json。告诉玩家有哪些变化。`)
};

const ja_upload_release_intro = /** @type {(inputs: Upload_Release_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`バージョンは manifest.json から取得します。変更点をプレイヤーに伝えましょう。`)
};

/**
* | output |
* | --- |
* | "The version comes from manifest.json. Tell players what changed." |
*
* @param {Upload_Release_IntroInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_release_intro = /** @type {((inputs?: Upload_Release_IntroInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Release_IntroInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_release_intro(inputs)
	if (locale === "de") return de_upload_release_intro(inputs)
	if (locale === "fr") return fr_upload_release_intro(inputs)
	if (locale === "it") return it_upload_release_intro(inputs)
	if (locale === "nl") return nl_upload_release_intro(inputs)
	if (locale === "pl") return pl_upload_release_intro(inputs)
	if (locale === "pt") return pt_upload_release_intro(inputs)
	if (locale === "ru") return ru_upload_release_intro(inputs)
	if (locale === "sv") return sv_upload_release_intro(inputs)
	if (locale === "tr") return tr_upload_release_intro(inputs)
	if (locale === "zh") return zh_upload_release_intro(inputs)
	if (locale === "ja") return ja_upload_release_intro(inputs)
	return en_upload_release_intro(inputs)
});
