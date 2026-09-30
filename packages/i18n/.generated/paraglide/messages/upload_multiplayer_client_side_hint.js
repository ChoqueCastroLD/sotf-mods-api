/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Multiplayer_Client_Side_HintInputs */

const en_upload_multiplayer_client_side_hint = /** @type {(inputs: Upload_Multiplayer_Client_Side_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Only the player who installs it needs it.`)
};

const es_upload_multiplayer_client_side_hint = /** @type {(inputs: Upload_Multiplayer_Client_Side_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Solo lo necesita quien lo instala.`)
};

const de_upload_multiplayer_client_side_hint = /** @type {(inputs: Upload_Multiplayer_Client_Side_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nur wer ihn installiert, braucht ihn.`)
};

const fr_upload_multiplayer_client_side_hint = /** @type {(inputs: Upload_Multiplayer_Client_Side_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seul le joueur qui l’installe en a besoin.`)
};

const it_upload_multiplayer_client_side_hint = /** @type {(inputs: Upload_Multiplayer_Client_Side_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Serve solo a chi la installa.`)
};

const nl_upload_multiplayer_client_side_hint = /** @type {(inputs: Upload_Multiplayer_Client_Side_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alleen wie hem installeert, heeft hem nodig.`)
};

const pl_upload_multiplayer_client_side_hint = /** @type {(inputs: Upload_Multiplayer_Client_Side_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Potrzebuje go tylko osoba, która go instaluje.`)
};

const pt_upload_multiplayer_client_side_hint = /** @type {(inputs: Upload_Multiplayer_Client_Side_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Só quem instala precisa dele.`)
};

const ru_upload_multiplayer_client_side_hint = /** @type {(inputs: Upload_Multiplayer_Client_Side_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Нужен только тому, кто его установил.`)
};

const sv_upload_multiplayer_client_side_hint = /** @type {(inputs: Upload_Multiplayer_Client_Side_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bara den som installerar den behöver den.`)
};

const tr_upload_multiplayer_client_side_hint = /** @type {(inputs: Upload_Multiplayer_Client_Side_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yalnızca kuran oyuncunun ihtiyacı var.`)
};

const zh_upload_multiplayer_client_side_hint = /** @type {(inputs: Upload_Multiplayer_Client_Side_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`只有安装它的玩家需要。`)
};

const ja_upload_multiplayer_client_side_hint = /** @type {(inputs: Upload_Multiplayer_Client_Side_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`導入した本人だけが必要です。`)
};

/**
* | output |
* | --- |
* | "Only the player who installs it needs it." |
*
* @param {Upload_Multiplayer_Client_Side_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_multiplayer_client_side_hint = /** @type {((inputs?: Upload_Multiplayer_Client_Side_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Multiplayer_Client_Side_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_multiplayer_client_side_hint(inputs)
	if (locale === "de") return de_upload_multiplayer_client_side_hint(inputs)
	if (locale === "fr") return fr_upload_multiplayer_client_side_hint(inputs)
	if (locale === "it") return it_upload_multiplayer_client_side_hint(inputs)
	if (locale === "nl") return nl_upload_multiplayer_client_side_hint(inputs)
	if (locale === "pl") return pl_upload_multiplayer_client_side_hint(inputs)
	if (locale === "pt") return pt_upload_multiplayer_client_side_hint(inputs)
	if (locale === "ru") return ru_upload_multiplayer_client_side_hint(inputs)
	if (locale === "sv") return sv_upload_multiplayer_client_side_hint(inputs)
	if (locale === "tr") return tr_upload_multiplayer_client_side_hint(inputs)
	if (locale === "zh") return zh_upload_multiplayer_client_side_hint(inputs)
	if (locale === "ja") return ja_upload_multiplayer_client_side_hint(inputs)
	return en_upload_multiplayer_client_side_hint(inputs)
});
