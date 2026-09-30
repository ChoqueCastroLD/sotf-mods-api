/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Kits_Mp_Client_SideInputs */

const en_kits_mp_client_side = /** @type {(inputs: Kits_Mp_Client_SideInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Client-side: ${count__number} mod`);
	return /** @type {LocalizedString} */ (`Client-side: ${count__number} mods`)
	
};

const es_kits_mp_client_side = /** @type {(inputs: Kits_Mp_Client_SideInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Del lado del cliente: ${count__number} mod`);
	return /** @type {LocalizedString} */ (`Del lado del cliente: ${count__number} mods`)
	
};

const de_kits_mp_client_side = /** @type {(inputs: Kits_Mp_Client_SideInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Clientseitig: ${count__number} Mod`);
	return /** @type {LocalizedString} */ (`Clientseitig: ${count__number} Mods`)
	
};

const fr_kits_mp_client_side = /** @type {(inputs: Kits_Mp_Client_SideInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Côté client : ${count__number} mod`);
	return /** @type {LocalizedString} */ (`Côté client : ${count__number} mods`)
	
};

const it_kits_mp_client_side = /** @type {(inputs: Kits_Mp_Client_SideInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Lato client: ${count__number} mod`);
	return /** @type {LocalizedString} */ (`Lato client: ${count__number} mod`)
	
};

const nl_kits_mp_client_side = /** @type {(inputs: Kits_Mp_Client_SideInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Client-side: ${count__number} mod`);
	return /** @type {LocalizedString} */ (`Client-side: ${count__number} mods`)
	
};

const pl_kits_mp_client_side = /** @type {(inputs: Kits_Mp_Client_SideInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Po stronie klienta: ${count__number} mod`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`Po stronie klienta: ${count__number} mody`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`Po stronie klienta: ${count__number} modów`);
	return /** @type {LocalizedString} */ (`Po stronie klienta: ${count__number} moda`)
	
};

const pt_kits_mp_client_side = /** @type {(inputs: Kits_Mp_Client_SideInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Do lado do cliente: ${count__number} mod`);
	return /** @type {LocalizedString} */ (`Do lado do cliente: ${count__number} mods`)
	
};

const ru_kits_mp_client_side = /** @type {(inputs: Kits_Mp_Client_SideInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`На стороне клиента: ${count__number} мод`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`На стороне клиента: ${count__number} мода`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`На стороне клиента: ${count__number} модов`);
	return /** @type {LocalizedString} */ (`На стороне клиента: ${count__number} мода`)
	
};

const sv_kits_mp_client_side = /** @type {(inputs: Kits_Mp_Client_SideInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Klientsida: ${count__number} modd`);
	return /** @type {LocalizedString} */ (`Klientsida: ${count__number} moddar`)
	
};

const tr_kits_mp_client_side = /** @type {(inputs: Kits_Mp_Client_SideInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`İstemci tarafı: ${count__number} mod`);
	return /** @type {LocalizedString} */ (`İstemci tarafı: ${count__number} mod`)
	
};

const zh_kits_mp_client_side = /** @type {(inputs: Kits_Mp_Client_SideInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`客户端：${count__number} 个模组`)
};

const ja_kits_mp_client_side = /** @type {(inputs: Kits_Mp_Client_SideInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`クライアント側：${count__number} 件`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "Client-side: {count__number} mod" |
* | * | "Client-side: {count__number} mods" |
*
* @param {Kits_Mp_Client_SideInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_mp_client_side = /** @type {((inputs: Kits_Mp_Client_SideInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Mp_Client_SideInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_mp_client_side(inputs)
	if (locale === "de") return de_kits_mp_client_side(inputs)
	if (locale === "fr") return fr_kits_mp_client_side(inputs)
	if (locale === "it") return it_kits_mp_client_side(inputs)
	if (locale === "nl") return nl_kits_mp_client_side(inputs)
	if (locale === "pl") return pl_kits_mp_client_side(inputs)
	if (locale === "pt") return pt_kits_mp_client_side(inputs)
	if (locale === "ru") return ru_kits_mp_client_side(inputs)
	if (locale === "sv") return sv_kits_mp_client_side(inputs)
	if (locale === "tr") return tr_kits_mp_client_side(inputs)
	if (locale === "zh") return zh_kits_mp_client_side(inputs)
	if (locale === "ja") return ja_kits_mp_client_side(inputs)
	return en_kits_mp_client_side(inputs)
});
