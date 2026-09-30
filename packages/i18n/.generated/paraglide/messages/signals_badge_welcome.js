/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Signals_Badge_WelcomeInputs */

const en_signals_badge_welcome = /** @type {(inputs: Signals_Badge_WelcomeInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("en", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Welcome to the new SOTF Mods`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Welcome to the new SOTF Mods — ${count__number} badge is waiting in your field guide`);
	return /** @type {LocalizedString} */ (`Welcome to the new SOTF Mods — ${count__number} badges are waiting in your field guide`)
	
};

const es_signals_badge_welcome = /** @type {(inputs: Signals_Badge_WelcomeInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("es", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Bienvenido al nuevo SOTF Mods`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Bienvenido al nuevo SOTF Mods: te espera ${count__number} insignia en tu cuaderno de campo`);
	return /** @type {LocalizedString} */ (`Bienvenido al nuevo SOTF Mods: te esperan ${count__number} insignias en tu cuaderno de campo`)
	
};

const de_signals_badge_welcome = /** @type {(inputs: Signals_Badge_WelcomeInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("de", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Willkommen beim neuen SOTF Mods`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Willkommen beim neuen SOTF Mods – ${count__number} Abzeichen wartet in deinem Feldbuch`);
	return /** @type {LocalizedString} */ (`Willkommen beim neuen SOTF Mods – ${count__number} Abzeichen warten in deinem Feldbuch`)
	
};

const fr_signals_badge_welcome = /** @type {(inputs: Signals_Badge_WelcomeInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("fr", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Bienvenue sur le nouveau SOTF Mods`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Bienvenue sur le nouveau SOTF Mods — ${count__number} badge vous attend dans votre carnet de terrain`);
	return /** @type {LocalizedString} */ (`Bienvenue sur le nouveau SOTF Mods — ${count__number} badges vous attendent dans votre carnet de terrain`)
	
};

const it_signals_badge_welcome = /** @type {(inputs: Signals_Badge_WelcomeInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("it", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Benvenuto nel nuovo SOTF Mods`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Benvenuto nel nuovo SOTF Mods: ${count__number} distintivo ti aspetta nel tuo quaderno di campo`);
	return /** @type {LocalizedString} */ (`Benvenuto nel nuovo SOTF Mods: ${count__number} distintivi ti aspettano nel tuo quaderno di campo`)
	
};

const nl_signals_badge_welcome = /** @type {(inputs: Signals_Badge_WelcomeInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("nl", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Welkom bij het nieuwe SOTF Mods`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Welkom bij het nieuwe SOTF Mods — er wacht ${count__number} badge in je veldboek`);
	return /** @type {LocalizedString} */ (`Welkom bij het nieuwe SOTF Mods — er wachten ${count__number} badges in je veldboek`)
	
};

const pl_signals_badge_welcome = /** @type {(inputs: Signals_Badge_WelcomeInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("pl", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Witaj w nowym SOTF Mods`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Witaj w nowym SOTF Mods — w twoim notatniku terenowym czeka ${count__number} odznaka`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`Witaj w nowym SOTF Mods — w twoim notatniku terenowym czekają ${count__number} odznaki`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`Witaj w nowym SOTF Mods — w twoim notatniku terenowym czeka ${count__number} odznak`);
	return /** @type {LocalizedString} */ (`Witaj w nowym SOTF Mods — w twoim notatniku terenowym czeka ${count__number} odznaki`)
	
};

const pt_signals_badge_welcome = /** @type {(inputs: Signals_Badge_WelcomeInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("pt", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Boas-vindas ao novo SOTF Mods`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Boas-vindas ao novo SOTF Mods — ${count__number} insígnia espera por você no seu caderno de campo`);
	return /** @type {LocalizedString} */ (`Boas-vindas ao novo SOTF Mods — ${count__number} insígnias esperam por você no seu caderno de campo`)
	
};

const ru_signals_badge_welcome = /** @type {(inputs: Signals_Badge_WelcomeInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("ru", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Добро пожаловать в новый SOTF Mods`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Добро пожаловать в новый SOTF Mods — в полевом дневнике вас ждёт ${count__number} значок`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`Добро пожаловать в новый SOTF Mods — в полевом дневнике вас ждут ${count__number} значка`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`Добро пожаловать в новый SOTF Mods — в полевом дневнике вас ждут ${count__number} значков`);
	return /** @type {LocalizedString} */ (`Добро пожаловать в новый SOTF Mods — в полевом дневнике вас ждут ${count__number} значка`)
	
};

const sv_signals_badge_welcome = /** @type {(inputs: Signals_Badge_WelcomeInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("sv", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Välkommen till nya SOTF Mods`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Välkommen till nya SOTF Mods — ${count__number} märke väntar i din fältdagbok`);
	return /** @type {LocalizedString} */ (`Välkommen till nya SOTF Mods — ${count__number} märken väntar i din fältdagbok`)
	
};

const tr_signals_badge_welcome = /** @type {(inputs: Signals_Badge_WelcomeInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("tr", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Yeni SOTF Mods’a hoş geldin`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Yeni SOTF Mods’a hoş geldin — saha defterinde ${count__number} rozet seni bekliyor`);
	return /** @type {LocalizedString} */ (`Yeni SOTF Mods’a hoş geldin — saha defterinde ${count__number} rozet seni bekliyor`)
	
};

const zh_signals_badge_welcome = /** @type {(inputs: Signals_Badge_WelcomeInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("zh", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`欢迎来到全新的 SOTF Mods`);
	return /** @type {LocalizedString} */ (`欢迎来到全新的 SOTF Mods——你的野外手册里有 ${count__number} 枚徽章等你查看`)
	
};

const ja_signals_badge_welcome = /** @type {(inputs: Signals_Badge_WelcomeInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("ja", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`新しい SOTF Mods へようこそ`);
	return /** @type {LocalizedString} */ (`新しい SOTF Mods へようこそ。フィールドノートで ${count__number} 個のバッジがあなたを待っています`)
	
};

/**
* | count__exact | count__plural | output |
* | --- | --- | --- |
* | "0" | * | "Welcome to the new SOTF Mods" |
* | * | "one" | "Welcome to the new SOTF Mods — {count__number} badge is waiting in your field guide" |
* | * | * | "Welcome to the new SOTF Mods — {count__number} badges are waiting in your field guide" |
*
* @param {Signals_Badge_WelcomeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const signals_badge_welcome = /** @type {((inputs: Signals_Badge_WelcomeInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Badge_WelcomeInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_signals_badge_welcome(inputs)
	if (locale === "de") return de_signals_badge_welcome(inputs)
	if (locale === "fr") return fr_signals_badge_welcome(inputs)
	if (locale === "it") return it_signals_badge_welcome(inputs)
	if (locale === "nl") return nl_signals_badge_welcome(inputs)
	if (locale === "pl") return pl_signals_badge_welcome(inputs)
	if (locale === "pt") return pt_signals_badge_welcome(inputs)
	if (locale === "ru") return ru_signals_badge_welcome(inputs)
	if (locale === "sv") return sv_signals_badge_welcome(inputs)
	if (locale === "tr") return tr_signals_badge_welcome(inputs)
	if (locale === "zh") return zh_signals_badge_welcome(inputs)
	if (locale === "ja") return ja_signals_badge_welcome(inputs)
	return en_signals_badge_welcome(inputs)
});
