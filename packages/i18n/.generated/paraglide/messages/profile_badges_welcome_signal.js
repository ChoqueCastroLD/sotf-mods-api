/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ badgeCount: NonNullable<unknown> }} Profile_Badges_Welcome_SignalInputs */

const en_profile_badges_welcome_signal = /** @type {(inputs: Profile_Badges_Welcome_SignalInputs) => LocalizedString} */ (i) => {const badgeCount__plural = registry.plural("en", i?.badgeCount, {});
	const badgeCount__number = registry.number("en", i?.badgeCount, {});
	if (badgeCount__plural === "one") return /** @type {LocalizedString} */ (`Welcome to v2: you earned ${badgeCount__number} badge`);
	return /** @type {LocalizedString} */ (`Welcome to v2: you earned ${badgeCount__number} badges`)
	
};

const es_profile_badges_welcome_signal = /** @type {(inputs: Profile_Badges_Welcome_SignalInputs) => LocalizedString} */ (i) => {const badgeCount__plural = registry.plural("es", i?.badgeCount, {});
	const badgeCount__number = registry.number("es", i?.badgeCount, {});
	if (badgeCount__plural === "one") return /** @type {LocalizedString} */ (`Bienvenido a v2: has ganado ${badgeCount__number} insignia`);
	return /** @type {LocalizedString} */ (`Bienvenido a v2: has ganado ${badgeCount__number} insignias`)
	
};

const de_profile_badges_welcome_signal = /** @type {(inputs: Profile_Badges_Welcome_SignalInputs) => LocalizedString} */ (i) => {const badgeCount__plural = registry.plural("de", i?.badgeCount, {});
	const badgeCount__number = registry.number("de", i?.badgeCount, {});
	if (badgeCount__plural === "one") return /** @type {LocalizedString} */ (`Willkommen bei v2: Du hast ${badgeCount__number} Abzeichen verdient`);
	return /** @type {LocalizedString} */ (`Willkommen bei v2: Du hast ${badgeCount__number} Abzeichen verdient`)
	
};

const fr_profile_badges_welcome_signal = /** @type {(inputs: Profile_Badges_Welcome_SignalInputs) => LocalizedString} */ (i) => {const badgeCount__plural = registry.plural("fr", i?.badgeCount, {});
	const badgeCount__number = registry.number("fr", i?.badgeCount, {});
	if (badgeCount__plural === "one") return /** @type {LocalizedString} */ (`Bienvenue dans la v2 : vous avez obtenu ${badgeCount__number} badge`);
	return /** @type {LocalizedString} */ (`Bienvenue dans la v2 : vous avez obtenu ${badgeCount__number} badges`)
	
};

const it_profile_badges_welcome_signal = /** @type {(inputs: Profile_Badges_Welcome_SignalInputs) => LocalizedString} */ (i) => {const badgeCount__plural = registry.plural("it", i?.badgeCount, {});
	const badgeCount__number = registry.number("it", i?.badgeCount, {});
	if (badgeCount__plural === "one") return /** @type {LocalizedString} */ (`Benvenuto nella v2: hai ottenuto ${badgeCount__number} distintivo`);
	return /** @type {LocalizedString} */ (`Benvenuto nella v2: hai ottenuto ${badgeCount__number} distintivi`)
	
};

const nl_profile_badges_welcome_signal = /** @type {(inputs: Profile_Badges_Welcome_SignalInputs) => LocalizedString} */ (i) => {const badgeCount__plural = registry.plural("nl", i?.badgeCount, {});
	const badgeCount__number = registry.number("nl", i?.badgeCount, {});
	if (badgeCount__plural === "one") return /** @type {LocalizedString} */ (`Welkom bij v2: je hebt ${badgeCount__number} badge verdiend`);
	return /** @type {LocalizedString} */ (`Welkom bij v2: je hebt ${badgeCount__number} badges verdiend`)
	
};

const pl_profile_badges_welcome_signal = /** @type {(inputs: Profile_Badges_Welcome_SignalInputs) => LocalizedString} */ (i) => {const badgeCount__plural = registry.plural("pl", i?.badgeCount, {});
	const badgeCount__number = registry.number("pl", i?.badgeCount, {});
	if (badgeCount__plural === "one") return /** @type {LocalizedString} */ (`Witaj w v2: zdobyto ${badgeCount__number} odznakę`);
	if (badgeCount__plural === "few") return /** @type {LocalizedString} */ (`Witaj w v2: zdobyto ${badgeCount__number} odznaki`);
	if (badgeCount__plural === "many") return /** @type {LocalizedString} */ (`Witaj w v2: zdobyto ${badgeCount__number} odznak`);
	return /** @type {LocalizedString} */ (`Witaj w v2: zdobyto ${badgeCount__number} odznaki`)
	
};

const pt_profile_badges_welcome_signal = /** @type {(inputs: Profile_Badges_Welcome_SignalInputs) => LocalizedString} */ (i) => {const badgeCount__plural = registry.plural("pt", i?.badgeCount, {});
	const badgeCount__number = registry.number("pt", i?.badgeCount, {});
	if (badgeCount__plural === "one") return /** @type {LocalizedString} */ (`Bem-vindo à v2: você conquistou ${badgeCount__number} insígnia`);
	return /** @type {LocalizedString} */ (`Bem-vindo à v2: você conquistou ${badgeCount__number} insígnias`)
	
};

const ru_profile_badges_welcome_signal = /** @type {(inputs: Profile_Badges_Welcome_SignalInputs) => LocalizedString} */ (i) => {const badgeCount__plural = registry.plural("ru", i?.badgeCount, {});
	const badgeCount__number = registry.number("ru", i?.badgeCount, {});
	if (badgeCount__plural === "one") return /** @type {LocalizedString} */ (`Добро пожаловать в v2: вы получили ${badgeCount__number} значок`);
	if (badgeCount__plural === "few") return /** @type {LocalizedString} */ (`Добро пожаловать в v2: вы получили ${badgeCount__number} значка`);
	if (badgeCount__plural === "many") return /** @type {LocalizedString} */ (`Добро пожаловать в v2: вы получили ${badgeCount__number} значков`);
	return /** @type {LocalizedString} */ (`Добро пожаловать в v2: вы получили ${badgeCount__number} значка`)
	
};

const sv_profile_badges_welcome_signal = /** @type {(inputs: Profile_Badges_Welcome_SignalInputs) => LocalizedString} */ (i) => {const badgeCount__plural = registry.plural("sv", i?.badgeCount, {});
	const badgeCount__number = registry.number("sv", i?.badgeCount, {});
	if (badgeCount__plural === "one") return /** @type {LocalizedString} */ (`Välkommen till v2: du har tjänat in ${badgeCount__number} märke`);
	return /** @type {LocalizedString} */ (`Välkommen till v2: du har tjänat in ${badgeCount__number} märken`)
	
};

const tr_profile_badges_welcome_signal = /** @type {(inputs: Profile_Badges_Welcome_SignalInputs) => LocalizedString} */ (i) => {const badgeCount__plural = registry.plural("tr", i?.badgeCount, {});
	const badgeCount__number = registry.number("tr", i?.badgeCount, {});
	if (badgeCount__plural === "one") return /** @type {LocalizedString} */ (`v2’ye hoş geldin: ${badgeCount__number} rozet kazandın`);
	return /** @type {LocalizedString} */ (`v2’ye hoş geldin: ${badgeCount__number} rozet kazandın`)
	
};

const zh_profile_badges_welcome_signal = /** @type {(inputs: Profile_Badges_Welcome_SignalInputs) => LocalizedString} */ (i) => {
	const badgeCount__plural = registry.plural("zh", i?.badgeCount, {});
	const badgeCount__number = registry.number("zh", i?.badgeCount, {});return /** @type {LocalizedString} */ (`欢迎来到 v2：你获得了 ${badgeCount__number} 枚徽章`)
};

const ja_profile_badges_welcome_signal = /** @type {(inputs: Profile_Badges_Welcome_SignalInputs) => LocalizedString} */ (i) => {
	const badgeCount__plural = registry.plural("ja", i?.badgeCount, {});
	const badgeCount__number = registry.number("ja", i?.badgeCount, {});return /** @type {LocalizedString} */ (`v2 へようこそ：バッジを ${badgeCount__number} 個獲得しました`)
};

/**
* | badgeCount__plural | output |
* | --- | --- |
* | "one" | "Welcome to v2: you earned {badgeCount__number} badge" |
* | * | "Welcome to v2: you earned {badgeCount__number} badges" |
*
* @param {Profile_Badges_Welcome_SignalInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_badges_welcome_signal = /** @type {((inputs: Profile_Badges_Welcome_SignalInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Badges_Welcome_SignalInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_badges_welcome_signal(inputs)
	if (locale === "de") return de_profile_badges_welcome_signal(inputs)
	if (locale === "fr") return fr_profile_badges_welcome_signal(inputs)
	if (locale === "it") return it_profile_badges_welcome_signal(inputs)
	if (locale === "nl") return nl_profile_badges_welcome_signal(inputs)
	if (locale === "pl") return pl_profile_badges_welcome_signal(inputs)
	if (locale === "pt") return pt_profile_badges_welcome_signal(inputs)
	if (locale === "ru") return ru_profile_badges_welcome_signal(inputs)
	if (locale === "sv") return sv_profile_badges_welcome_signal(inputs)
	if (locale === "tr") return tr_profile_badges_welcome_signal(inputs)
	if (locale === "zh") return zh_profile_badges_welcome_signal(inputs)
	if (locale === "ja") return ja_profile_badges_welcome_signal(inputs)
	return en_profile_badges_welcome_signal(inputs)
});
