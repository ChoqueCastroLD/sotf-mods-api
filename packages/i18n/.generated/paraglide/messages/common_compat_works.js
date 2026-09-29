/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown>, build: NonNullable<unknown> }} Common_Compat_WorksInputs */

const en_common_compat_works = /** @type {(inputs: Common_Compat_WorksInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Works on ${i?.build}: confirmed by ${count__number} survivor`);
	return /** @type {LocalizedString} */ (`Works on ${i?.build}: confirmed by ${count__number} survivors`)
	
};

const es_common_compat_works = /** @type {(inputs: Common_Compat_WorksInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Funciona en ${i?.build}: confirmado por ${count__number} superviviente`);
	return /** @type {LocalizedString} */ (`Funciona en ${i?.build}: confirmado por ${count__number} supervivientes`)
	
};

const de_common_compat_works = /** @type {(inputs: Common_Compat_WorksInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Läuft mit ${i?.build}: von ${count__number} Überlebenden bestätigt`);
	return /** @type {LocalizedString} */ (`Läuft mit ${i?.build}: von ${count__number} Überlebenden bestätigt`)
	
};

const fr_common_compat_works = /** @type {(inputs: Common_Compat_WorksInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Fonctionne sur ${i?.build} : confirmé par ${count__number} survivant`);
	return /** @type {LocalizedString} */ (`Fonctionne sur ${i?.build} : confirmé par ${count__number} survivants`)
	
};

const it_common_compat_works = /** @type {(inputs: Common_Compat_WorksInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Funziona su ${i?.build}: confermato da ${count__number} sopravvissuto`);
	return /** @type {LocalizedString} */ (`Funziona su ${i?.build}: confermato da ${count__number} sopravvissuti`)
	
};

const nl_common_compat_works = /** @type {(inputs: Common_Compat_WorksInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Werkt op ${i?.build}: bevestigd door ${count__number} overlevende`);
	return /** @type {LocalizedString} */ (`Werkt op ${i?.build}: bevestigd door ${count__number} overlevenden`)
	
};

const pl_common_compat_works = /** @type {(inputs: Common_Compat_WorksInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Działa na ${i?.build}: potwierdził ${count__number} ocalały`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`Działa na ${i?.build}: potwierdziło ${count__number} ocalałych`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`Działa na ${i?.build}: potwierdziło ${count__number} ocalałych`);
	return /** @type {LocalizedString} */ (`Działa na ${i?.build}: potwierdziło ${count__number} ocalałego`)
	
};

const pt_common_compat_works = /** @type {(inputs: Common_Compat_WorksInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Funciona na ${i?.build}: confirmado por ${count__number} sobrevivente`);
	return /** @type {LocalizedString} */ (`Funciona na ${i?.build}: confirmado por ${count__number} sobreviventes`)
	
};

const ru_common_compat_works = /** @type {(inputs: Common_Compat_WorksInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Работает на ${i?.build}: подтвердил ${count__number} выживший`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`Работает на ${i?.build}: подтвердили ${count__number} выживших`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`Работает на ${i?.build}: подтвердили ${count__number} выживших`);
	return /** @type {LocalizedString} */ (`Работает на ${i?.build}: подтвердили ${count__number} выжившего`)
	
};

const sv_common_compat_works = /** @type {(inputs: Common_Compat_WorksInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Fungerar på ${i?.build}: bekräftat av ${count__number} överlevare`);
	return /** @type {LocalizedString} */ (`Fungerar på ${i?.build}: bekräftat av ${count__number} överlevare`)
	
};

const tr_common_compat_works = /** @type {(inputs: Common_Compat_WorksInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.build} sürümünde çalışıyor: ${count__number} hayatta kalan onayladı`);
	return /** @type {LocalizedString} */ (`${i?.build} sürümünde çalışıyor: ${count__number} hayatta kalan onayladı`)
	
};

const zh_common_compat_works = /** @type {(inputs: Common_Compat_WorksInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`可在 ${i?.build} 上运行：已有 ${count__number} 位幸存者确认`)
};

const ja_common_compat_works = /** @type {(inputs: Common_Compat_WorksInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`${i?.build} で動作：${count__number} 人のサバイバーが確認`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "Works on {build}: confirmed by {count__number} survivor" |
* | * | "Works on {build}: confirmed by {count__number} survivors" |
*
* @param {Common_Compat_WorksInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_compat_works = /** @type {((inputs: Common_Compat_WorksInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Compat_WorksInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_compat_works(inputs)
	if (locale === "de") return de_common_compat_works(inputs)
	if (locale === "fr") return fr_common_compat_works(inputs)
	if (locale === "it") return it_common_compat_works(inputs)
	if (locale === "nl") return nl_common_compat_works(inputs)
	if (locale === "pl") return pl_common_compat_works(inputs)
	if (locale === "pt") return pt_common_compat_works(inputs)
	if (locale === "ru") return ru_common_compat_works(inputs)
	if (locale === "sv") return sv_common_compat_works(inputs)
	if (locale === "tr") return tr_common_compat_works(inputs)
	if (locale === "zh") return zh_common_compat_works(inputs)
	if (locale === "ja") return ja_common_compat_works(inputs)
	return en_common_compat_works(inputs)
});
