/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Multiplayer_Client_SideInputs */

const en_upload_multiplayer_client_side = /** @type {(inputs: Upload_Multiplayer_Client_SideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Client side`)
};

const es_upload_multiplayer_client_side = /** @type {(inputs: Upload_Multiplayer_Client_SideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Del lado del cliente`)
};

const de_upload_multiplayer_client_side = /** @type {(inputs: Upload_Multiplayer_Client_SideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Clientseitig`)
};

const fr_upload_multiplayer_client_side = /** @type {(inputs: Upload_Multiplayer_Client_SideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Côté client`)
};

const it_upload_multiplayer_client_side = /** @type {(inputs: Upload_Multiplayer_Client_SideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lato client`)
};

const nl_upload_multiplayer_client_side = /** @type {(inputs: Upload_Multiplayer_Client_SideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Clientzijde`)
};

const pl_upload_multiplayer_client_side = /** @type {(inputs: Upload_Multiplayer_Client_SideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Po stronie klienta`)
};

const pt_upload_multiplayer_client_side = /** @type {(inputs: Upload_Multiplayer_Client_SideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Do lado do cliente`)
};

const ru_upload_multiplayer_client_side = /** @type {(inputs: Upload_Multiplayer_Client_SideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`На стороне клиента`)
};

const sv_upload_multiplayer_client_side = /** @type {(inputs: Upload_Multiplayer_Client_SideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Klientsida`)
};

const tr_upload_multiplayer_client_side = /** @type {(inputs: Upload_Multiplayer_Client_SideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İstemci tarafı`)
};

const zh_upload_multiplayer_client_side = /** @type {(inputs: Upload_Multiplayer_Client_SideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`客户端`)
};

const ja_upload_multiplayer_client_side = /** @type {(inputs: Upload_Multiplayer_Client_SideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`クライアント側のみ`)
};

/**
* | output |
* | --- |
* | "Client side" |
*
* @param {Upload_Multiplayer_Client_SideInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_multiplayer_client_side = /** @type {((inputs?: Upload_Multiplayer_Client_SideInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Multiplayer_Client_SideInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_multiplayer_client_side(inputs)
	if (locale === "de") return de_upload_multiplayer_client_side(inputs)
	if (locale === "fr") return fr_upload_multiplayer_client_side(inputs)
	if (locale === "it") return it_upload_multiplayer_client_side(inputs)
	if (locale === "nl") return nl_upload_multiplayer_client_side(inputs)
	if (locale === "pl") return pl_upload_multiplayer_client_side(inputs)
	if (locale === "pt") return pt_upload_multiplayer_client_side(inputs)
	if (locale === "ru") return ru_upload_multiplayer_client_side(inputs)
	if (locale === "sv") return sv_upload_multiplayer_client_side(inputs)
	if (locale === "tr") return tr_upload_multiplayer_client_side(inputs)
	if (locale === "zh") return zh_upload_multiplayer_client_side(inputs)
	if (locale === "ja") return ja_upload_multiplayer_client_side(inputs)
	return en_upload_multiplayer_client_side(inputs)
});
