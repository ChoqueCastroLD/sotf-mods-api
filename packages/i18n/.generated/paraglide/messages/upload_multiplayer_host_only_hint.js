/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Multiplayer_Host_Only_HintInputs */

const en_upload_multiplayer_host_only_hint = /** @type {(inputs: Upload_Multiplayer_Host_Only_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Only the host needs it; guests join without it.`)
};

const es_upload_multiplayer_host_only_hint = /** @type {(inputs: Upload_Multiplayer_Host_Only_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Solo lo necesita el anfitrión; los invitados entran sin él.`)
};

const de_upload_multiplayer_host_only_hint = /** @type {(inputs: Upload_Multiplayer_Host_Only_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nur der Host braucht ihn; Gäste treten ohne bei.`)
};

const fr_upload_multiplayer_host_only_hint = /** @type {(inputs: Upload_Multiplayer_Host_Only_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seul l’hôte en a besoin ; les invités rejoignent sans.`)
};

const it_upload_multiplayer_host_only_hint = /** @type {(inputs: Upload_Multiplayer_Host_Only_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Serve solo all’host; gli ospiti entrano senza.`)
};

const nl_upload_multiplayer_host_only_hint = /** @type {(inputs: Upload_Multiplayer_Host_Only_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alleen de host heeft hem nodig; gasten doen mee zonder.`)
};

const pl_upload_multiplayer_host_only_hint = /** @type {(inputs: Upload_Multiplayer_Host_Only_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Potrzebuje go tylko host; goście dołączają bez niego.`)
};

const pt_upload_multiplayer_host_only_hint = /** @type {(inputs: Upload_Multiplayer_Host_Only_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Só o anfitrião precisa; os convidados entram sem ele.`)
};

const ru_upload_multiplayer_host_only_hint = /** @type {(inputs: Upload_Multiplayer_Host_Only_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Нужен только хосту; гости подключаются без него.`)
};

const sv_upload_multiplayer_host_only_hint = /** @type {(inputs: Upload_Multiplayer_Host_Only_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bara värden behöver den; gäster ansluter utan.`)
};

const tr_upload_multiplayer_host_only_hint = /** @type {(inputs: Upload_Multiplayer_Host_Only_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yalnızca sunucu sahibinin ihtiyacı var; misafirler onsuz katılır.`)
};

const zh_upload_multiplayer_host_only_hint = /** @type {(inputs: Upload_Multiplayer_Host_Only_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`只有房主需要，其他玩家无需安装即可加入。`)
};

const ja_upload_multiplayer_host_only_hint = /** @type {(inputs: Upload_Multiplayer_Host_Only_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ホストだけが必要で、ゲストはなしで参加できます。`)
};

/**
* | output |
* | --- |
* | "Only the host needs it; guests join without it." |
*
* @param {Upload_Multiplayer_Host_Only_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_multiplayer_host_only_hint = /** @type {((inputs?: Upload_Multiplayer_Host_Only_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Multiplayer_Host_Only_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_multiplayer_host_only_hint(inputs)
	if (locale === "de") return de_upload_multiplayer_host_only_hint(inputs)
	if (locale === "fr") return fr_upload_multiplayer_host_only_hint(inputs)
	if (locale === "it") return it_upload_multiplayer_host_only_hint(inputs)
	if (locale === "nl") return nl_upload_multiplayer_host_only_hint(inputs)
	if (locale === "pl") return pl_upload_multiplayer_host_only_hint(inputs)
	if (locale === "pt") return pt_upload_multiplayer_host_only_hint(inputs)
	if (locale === "ru") return ru_upload_multiplayer_host_only_hint(inputs)
	if (locale === "sv") return sv_upload_multiplayer_host_only_hint(inputs)
	if (locale === "tr") return tr_upload_multiplayer_host_only_hint(inputs)
	if (locale === "zh") return zh_upload_multiplayer_host_only_hint(inputs)
	if (locale === "ja") return ja_upload_multiplayer_host_only_hint(inputs)
	return en_upload_multiplayer_host_only_hint(inputs)
});
