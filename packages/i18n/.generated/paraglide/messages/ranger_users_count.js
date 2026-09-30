/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Ranger_Users_CountInputs */

const en_ranger_users_count = /** @type {(inputs: Ranger_Users_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} user`);
	return /** @type {LocalizedString} */ (`${count__number} users`)
	
};

const es_ranger_users_count = /** @type {(inputs: Ranger_Users_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} usuario`);
	return /** @type {LocalizedString} */ (`${count__number} usuarios`)
	
};

const de_ranger_users_count = /** @type {(inputs: Ranger_Users_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} Benutzer`);
	return /** @type {LocalizedString} */ (`${count__number} Benutzer`)
	
};

const fr_ranger_users_count = /** @type {(inputs: Ranger_Users_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} utilisateur`);
	return /** @type {LocalizedString} */ (`${count__number} utilisateurs`)
	
};

const it_ranger_users_count = /** @type {(inputs: Ranger_Users_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} utente`);
	return /** @type {LocalizedString} */ (`${count__number} utenti`)
	
};

const nl_ranger_users_count = /** @type {(inputs: Ranger_Users_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} gebruiker`);
	return /** @type {LocalizedString} */ (`${count__number} gebruikers`)
	
};

const pl_ranger_users_count = /** @type {(inputs: Ranger_Users_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} użytkownik`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} użytkowników`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} użytkowników`);
	return /** @type {LocalizedString} */ (`${count__number} użytkownika`)
	
};

const pt_ranger_users_count = /** @type {(inputs: Ranger_Users_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} usuário`);
	return /** @type {LocalizedString} */ (`${count__number} usuários`)
	
};

const ru_ranger_users_count = /** @type {(inputs: Ranger_Users_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} пользователь`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} пользователя`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} пользователей`);
	return /** @type {LocalizedString} */ (`${count__number} пользователя`)
	
};

const sv_ranger_users_count = /** @type {(inputs: Ranger_Users_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} användare`);
	return /** @type {LocalizedString} */ (`${count__number} användare`)
	
};

const tr_ranger_users_count = /** @type {(inputs: Ranger_Users_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} kullanıcı`);
	return /** @type {LocalizedString} */ (`${count__number} kullanıcı`)
	
};

const zh_ranger_users_count = /** @type {(inputs: Ranger_Users_CountInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`${count__number} 位用户`)
};

const ja_ranger_users_count = /** @type {(inputs: Ranger_Users_CountInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`${count__number} 人のユーザー`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{count__number} user" |
* | * | "{count__number} users" |
*
* @param {Ranger_Users_CountInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_users_count = /** @type {((inputs: Ranger_Users_CountInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Users_CountInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_users_count(inputs)
	if (locale === "de") return de_ranger_users_count(inputs)
	if (locale === "fr") return fr_ranger_users_count(inputs)
	if (locale === "it") return it_ranger_users_count(inputs)
	if (locale === "nl") return nl_ranger_users_count(inputs)
	if (locale === "pl") return pl_ranger_users_count(inputs)
	if (locale === "pt") return pt_ranger_users_count(inputs)
	if (locale === "ru") return ru_ranger_users_count(inputs)
	if (locale === "sv") return sv_ranger_users_count(inputs)
	if (locale === "tr") return tr_ranger_users_count(inputs)
	if (locale === "zh") return zh_ranger_users_count(inputs)
	if (locale === "ja") return ja_ranger_users_count(inputs)
	return en_ranger_users_count(inputs)
});
